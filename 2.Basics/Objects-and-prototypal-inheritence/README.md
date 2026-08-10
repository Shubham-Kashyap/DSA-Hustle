# JAVASCRIPT OBJECTS, PROTOTYPES & RUNTIME

> **Before understanding JavaScript classes deeply, understand how JavaScript itself thinks about objects.**

JavaScript में classes बनाना और उन्हें use करना अपने आप में कोई बहुत difficult चीज़ नहीं है.

```javascript
class User {
    constructor(name) {
        this.name = name;
    }

    login() {
        console.log(`${this.name} logged in`);
    }
}
```

यह syntax पढ़ना relatively easy है.

लेकिन अगर हमें JavaScript को **actually deeply understand** करना है, तो सिर्फ `class`, `constructor`, `extends` और `super` समझ लेना enough नहीं है.

क्यों?

Because:

> **JavaScript is fundamentally a prototype-based language.**

`class` syntax JavaScript के ऊपर available एक convenient abstraction है.

इसलिए अगर हम JavaScript के objects, inheritance, functions, arrays और runtime behaviour को properly समझना चाहते हैं, तो हमें थोड़ा नीचे जाना पड़ेगा:

```text
JavaScript
    ↓
Objects
    ↓
Prototypes
    ↓
Prototype Chain
    ↓
Functions
    ↓
Execution Context
    ↓
Memory / References
    ↓
Runtime Behaviour
```

यही इस section का purpose है.

---

# 1. First Question — What is an Object in JavaScript?

Simple language में:

> **An object is a collection of related data and behaviour.**

Example:

```javascript
const user = {
    name: "Shubham",
    age: 25,

    login() {
        console.log("User logged in");
    }
};
```

यहाँ:

```text
user
│
├── name
├── age
└── login()
```

`name` और `age` data हैं.

`login()` behaviour है.

इसलिए object को हम एक ऐसी entity की तरह समझ सकते हैं जो:

```text
Data
+
Behaviour
```

को एक साथ represent कर सकती है.

---

# 2. JavaScript is Object-Centric — But Be Precise

JavaScript में बहुत सारी चीज़ें objects के साथ heavily interact करती हैं.

For example:

```javascript
const user = {};
const numbers = [];
const fn = function () {};
const date = new Date();
```

इन सबका object model से strong connection है.

लेकिन एक important distinction याद रखना है:

> **JavaScript में everything is NOT literally an object.**

JavaScript में primitive values भी होती हैं.

The primitive types are:

```text
string
number
bigint
boolean
undefined
symbol
null
```

और बाकी major non-primitive value category:

```text
object
```

So the correct mental model is:

```text
JavaScript Values
│
├── Primitive Values
│   ├── string
│   ├── number
│   ├── bigint
│   ├── boolean
│   ├── undefined
│   ├── symbol
│   └── null
│
└── Objects
    ├── Plain Objects
    ├── Arrays
    ├── Functions
    ├── Dates
    ├── Maps
    ├── Sets
    └── etc.
```

This distinction is important because:

> **Primitive values are not objects.**

---

# 3. Then Why Does JavaScript Sometimes Make Primitives Feel Like Objects?

This is where JavaScript becomes interesting.

For example:

```javascript
const name = "Shubham";

console.log(name.length);
console.log(name.toUpperCase());
```

`name` is a primitive string.

Yet we can do:

```text
name.length
name.toUpperCase()
```

So what is happening?

JavaScript provides wrapper behaviour around certain primitive values when we perform operations that require object-like behaviour.

Conceptually:

```text
"Shubham"
    ↓
temporary String wrapper behaviour
    ↓
.length / .toUpperCase()
```

We should not conclude:

> `"Shubham" is actually an object.`

It is still a primitive string value.

This is one of those JavaScript behaviours that becomes much easier to understand once the object/prototype model is clear.

---

# 4. Objects Have Prototypes

This is the heart of JavaScript's object model.

An object can have a connection to another object called its **prototype**.

That prototype can provide properties and methods.

For example:

```javascript
const user = {
    name: "Shubham"
};
```

When we do:

```javascript
user.toString();
```

we did not define `toString()` ourselves.

So where did it come from?

JavaScript searches through the object's prototype chain.

Conceptually:

```text
user
  ↓
Object.prototype
  ↓
null
```

`toString()` is available through `Object.prototype`.

---

# 5. Prototype Chain

The process is called the **prototype chain**.

Suppose:

```javascript
const user = {
    name: "Shubham"
};
```

And we execute:

```javascript
user.toString();
```

JavaScript roughly follows:

```text
Does user have toString()?
        ↓
       No
        ↓
Check user's prototype
        ↓
Does Object.prototype have toString()?
        ↓
       Yes
        ↓
Use it
```

This is prototype lookup.

Mental model:

```text
Object
  ↓
Prototype
  ↓
Prototype's Prototype
  ↓
...
  ↓
null
```

The lookup stops when the property is found or the chain reaches `null`.

---

# 6. `Object.getPrototypeOf()`

We can inspect an object's prototype:

```javascript
const user = {
    name: "Shubham"
};

console.log(Object.getPrototypeOf(user));
```

For a normal object created using `{}`, the prototype is typically:

```text
Object.prototype
```

So:

```text
user
 ↓
Object.prototype
 ↓
null
```

This is one of the most useful things to remember when understanding JavaScript inheritance.

---

# 7. `__proto__` vs `prototype`

These two terms create a lot of confusion.

They are related, but they are **not the same thing**.

### `__proto__`

Historically, `__proto__` provides access to an object's prototype.

Example:

```javascript
const user = {};

console.log(user.__proto__);
```

Modern code should generally prefer:

```javascript
Object.getPrototypeOf(user);
```

for reading the prototype.

---

### `prototype`

`prototype` is a property associated with functions that can be used as constructors.

Example:

```javascript
function User(name) {
    this.name = name;
}

console.log(User.prototype);
```

The function's `prototype` object is used as the prototype of objects created through:

```javascript
new User("Shubham");
```

So:

```text
User function
     |
     | .prototype
     ↓
User.prototype
     ↑
     |
new User()
     |
     ↓
user object
```

And:

```javascript
Object.getPrototypeOf(user) === User.prototype
```

will be `true`.

---

# 8. The `new` Keyword and Prototype Connection

Consider:

```javascript
function User(name) {
    this.name = name;
}

User.prototype.login = function () {
    console.log(`${this.name} logged in`);
};

const user = new User("Shubham");
```

When we use:

```javascript
new User("Shubham")
```

the resulting object is connected to:

```text
User.prototype
```

So:

```text
user
 ↓
User.prototype
 ↓
Object.prototype
 ↓
null
```

Now:

```javascript
user.login();
```

works even though `login()` is not directly stored on `user`.

JavaScript finds it through the prototype chain.

This is one of the most important scenes in the JavaScript object-model movie.

---

# 9. Why Prototype Methods Matter

Suppose we create 1000 users.

If we put the same method directly on every object:

```text
user1 → login()
user2 → login()
user3 → login()
...
user1000 → login()
```

we conceptually have many separate method properties.

With the prototype approach:

```text
user1 ──┐
user2 ──┤
user3 ──┤──→ User.prototype → login()
...     │
user1000┘
```

The objects can share behaviour through the prototype.

This is one of the reasons prototype-based inheritance is such an important part of JavaScript.

---

# 10. Functions Are Objects Too

JavaScript functions are special.

A function can:

```text
be called
+
have properties
+
have a prototype property in constructor-capable cases
+
participate in the object model
```

Example:

```javascript
function greet() {
    console.log("Hello");
}

greet.message = "Welcome";

console.log(greet.message);
```

Output:

```text
Welcome
```

The function itself can have properties.

So a useful mental model is:

> **A function is callable, but it is also an object-like value with its own properties and prototype-related behaviour.**

---

# 11. Arrays Are Objects

Consider:

```javascript
const numbers = [10, 20, 30];
```

Arrays are objects in JavaScript.

```javascript
console.log(typeof numbers);
```

Output:

```text
object
```

This is why arrays can have methods such as:

```javascript
numbers.push(40);
numbers.pop();
numbers.map(...);
numbers.filter(...);
```

Their behaviour comes through the array object and its prototype chain.

Conceptually:

```text
numbers
   ↓
Array.prototype
   ↓
Object.prototype
   ↓
null
```

So:

```javascript
numbers.map(...)
```

works because `map()` is available through the array's prototype.

---

# 12. Functions, Arrays and Objects — Same Object Model, Different Behaviour

We can have:

```text
Plain Object
     ↓
Object.prototype

Array
     ↓
Array.prototype
     ↓
Object.prototype

Function
     ↓
Function-related prototype chain
     ↓
Object.prototype
```

They are not identical.

But they participate in the same broader JavaScript object model.

---

# 13. `null` — The Famous JavaScript Confusion

Consider:

```javascript
typeof null
```

Output:

```text
object
```

This is a famous historical behaviour of JavaScript.

But:

> **`null` is actually a primitive value, not an object.**

So do not memorize:

```text
typeof null === object
therefore null is object
```

That conclusion is wrong.

The correct understanding is:

```text
null
 ↓
primitive value

typeof null
 ↓
"object"
```

This is one of JavaScript's historical quirks.

---

# 14. Prototype-Based Inheritance

JavaScript's inheritance model is fundamentally prototype-based.

Example:

```javascript
const animal = {
    eat() {
        console.log("Eating");
    }
};

const dog = Object.create(animal);

dog.bark = function () {
    console.log("Barking");
};

dog.eat();
dog.bark();
```

Output:

```text
Eating
Barking
```

Why does:

```javascript
dog.eat();
```

work?

Because:

```text
dog
 ↓
animal
 ↓
Object.prototype
 ↓
null
```

JavaScript finds `eat()` in the prototype chain.

---

# 15. `class` Does Not Replace Prototypes

Now we come to the important part.

Consider:

```javascript
class User {
    login() {
        console.log("Login");
    }
}
```

It looks like traditional class-based OOP.

But internally, JavaScript still uses its prototype mechanism.

For example:

```javascript
const user = new User();

console.log(Object.getPrototypeOf(user) === User.prototype);
```

Output:

```text
true
```

So:

```text
class syntax
     ↓
JavaScript object model
     ↓
prototype mechanism
```

This is why we should not think:

> "JavaScript changed from prototype-based to class-based."

A better mental model is:

> **JavaScript introduced `class` syntax as a cleaner way to work with its existing prototype-based object model.**

---

# 16. `extends` Also Works Through Prototypes

Consider:

```javascript
class Animal {
    eat() {
        console.log("Eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Barking");
    }
}
```

Conceptually:

```text
dog
 ↓
Dog.prototype
 ↓
Animal.prototype
 ↓
Object.prototype
 ↓
null
```

So when:

```javascript
dog.eat();
```

is called, JavaScript can find `eat()` through the prototype chain.

This is the bridge between:

```text
OOP syntax
```

and:

```text
JavaScript prototype model
```

---

# 17. Property Lookup

Suppose:

```javascript
const user = {
    name: "Shubham"
};
```

and:

```javascript
user.name
```

JavaScript first looks at the object itself.

```text
Does user have "name"?
        ↓
       Yes
        ↓
Return it
```

Now:

```javascript
user.toString()
```

JavaScript does:

```text
Does user have toString?
        ↓
       No
        ↓
Check prototype
        ↓
Does prototype have toString?
        ↓
       Yes
        ↓
Call it
```

If nothing is found:

```text
user
 ↓
prototype
 ↓
prototype
 ↓
null
```

then JavaScript cannot find the property.

---

# 18. Shadowing

Suppose the prototype has:

```javascript
const animal = {
    sound: "Animal sound"
};

const dog = Object.create(animal);

dog.sound = "Bark";
```

Now:

```javascript
console.log(dog.sound);
```

Output:

```text
Bark
```

Why?

Because JavaScript finds `sound` directly on `dog`.

The prototype's `sound` is effectively shadowed.

```text
dog
├── sound = "Bark"      ← found first
│
└── prototype
    └── sound = "Animal sound"
```

This is called **property shadowing**.

---

# 19. Reference-Based Thinking

JavaScript variables can hold references to objects.

Example:

```javascript
const user1 = {
    name: "Shubham"
};

const user2 = user1;

user2.name = "Rahul";

console.log(user1.name);
```

Output:

```text
Rahul
```

Why?

Because:

```text
user1 ─────┐
           ↓
       Object in memory
           ↑
user2 ─────┘
```

Both variables refer to the same object.

This is why object assignment should not be mentally treated like copying the complete object.

---

# 20. Primitive vs Reference Behaviour

Consider:

```javascript
let a = 10;
let b = a;

b = 20;

console.log(a);
```

Output:

```text
10
```

The primitive value was copied.

With objects:

```javascript
const a = { value: 10 };
const b = a;

b.value = 20;

console.log(a.value);
```

Output:

```text
20
```

Both variables refer to the same object.

So the useful mental distinction is:

```text
Primitive
    ↓
Value semantics

Object
    ↓
Reference semantics
```

This is a simplified mental model, but it is extremely useful for understanding everyday JavaScript behaviour.

---

# 21. Execution Context — Important Correction

Now we connect this with the runtime.

When JavaScript executes code, it works with **Execution Contexts**.

Examples include:

```text
Global Execution Context
Function Execution Context
Module Execution Context
```

An execution context contains the information required for executing a piece of code.

Conceptually, it involves things such as:

```text
Environment / Bindings
Lexical Environment
Variable Environment
Execution state
```

The exact internal specification terminology is more detailed, but for practical understanding:

> **Execution Context is the environment in which JavaScript executes code and keeps track of identifiers and their relationships to values.**

---

# 22. Execution Context Is Not the Heap

This distinction is important.

Do not imagine:

```text
Global Execution Context
        ↓
One giant object
        ↓
Everything stored inside it
```

That is too simplified and technically misleading.

A better mental model is:

```text
JavaScript Runtime
│
├── Execution Contexts / Environments
│       ↓
│   bindings and execution information
│
└── Memory
        ↓
    Objects / Functions / other allocated values
```

Variables and bindings can refer to objects that exist in memory.

For example:

```javascript
const user = {
    name: "Shubham"
};
```

Conceptually:

```text
Environment / Binding
        |
        | user
        ↓
Object in memory
┌──────────────────┐
│ name: "Shubham"  │
└──────────────────┘
```

The exact memory implementation is engine-specific, so we should not assume a literal "stack vs heap diagram" for every internal detail.

But this mental model is useful:

> **Bindings keep track of names and their associated values/references, while objects are allocated and managed by the JavaScript engine's memory system.**

---

# 23. Memory Heap

The term **heap** is commonly used when discussing JavaScript runtime memory.

A simplified mental model:

```text
Heap
│
├── Objects
├── Functions
├── Arrays
├── Other dynamically allocated data
└── ...
```

For example:

```javascript
const user = {
    name: "Shubham"
};
```

We can conceptually imagine:

```text
user
 ↓
reference
 ↓
Heap object
```

But remember:

> **JavaScript does not give developers direct control over the heap.**

The JavaScript engine manages memory allocation and garbage collection.

---

# 24. Garbage Collection

Suppose:

```javascript
let user = {
    name: "Shubham"
};
```

Then:

```javascript
user = null;
```

If nothing else references that object, the object may eventually become eligible for garbage collection.

Conceptually:

```text
Before:

user ─────→ Object


After:

user ─────→ null

Object
  ↑
No reachable reference
  ↓
Eligible for garbage collection
```

The garbage collector is responsible for reclaiming memory when appropriate.

---

# 25. The Complete Mental Model

Now connect everything.

```text
                    JavaScript
                        |
          +-------------+-------------+
          |                           |
       Values                      Runtime
          |                           |
    +-----+------+             Execution Context
    |            |                     |
Primitive      Objects              Bindings
    |            |                     |
    |       +----+----+                |
    |       |         |                |
    |     Array     Function           |
    |       |         |                |
    |       +----+----+                |
    |            |                     |
    |       Prototype Chain            |
    |            |                     |
    |     Object.prototype             |
    |            |                     |
    +------------+---------------------+
                 |
               Memory
                 |
                Heap
                 |
          Garbage Collection
```

This is not a literal memory-layout diagram.

It is a **mental model** for connecting the concepts.

---

# 26. The JavaScript `class` Movie

Now we can finally understand this:

```javascript
class User {
    constructor(name) {
        this.name = name;
    }

    login() {
        console.log(`${this.name} logged in`);
    }
}

const user = new User("Shubham");
```

Instead of only seeing:

```text
class
constructor
new
method
```

we can see the deeper flow:

```text
class User
    ↓
creates User.prototype
    ↓
new User(...)
    ↓
creates a new object
    ↓
object is connected to User.prototype
    ↓
constructor runs
    ↓
name is initialised
    ↓
user.login()
    ↓
property lookup
    ↓
login found on User.prototype
    ↓
method executes
```

Now `class` syntax is no longer magic.

We understand what kind of system is underneath it.

---

# 27. The Most Important Connections

Keep these relationships in your head:

```text
Object
  ↓
can have a prototype

Prototype
  ↓
can provide inherited properties/methods

Prototype Chain
  ↓
controls property lookup

Function
  ↓
is callable and participates in object model

Function.prototype
  ↓
important for constructor-created objects

class
  ↓
cleaner syntax over JavaScript's prototype-based model

extends
  ↓
creates inheritance relationships through prototypes

Execution Context
  ↓
provides the environment for executing code

Bindings
  ↓
connect identifiers with values/references

Heap / Memory
  ↓
engine-managed storage for dynamically allocated data

Garbage Collection
  ↓
reclaims unreachable memory
```

---

# 28. Final Mental Model

If you remember only one thing from this entire README, remember this:

> **JavaScript looks class-based on the surface, but its object model is fundamentally prototype-based.**

And then:

```text
Class
   ↓
Prototype
   ↓
Object
   ↓
Prototype Chain
   ↓
Property Lookup
```

Alongside that:

```text
Execution Context
   ↓
Bindings
   ↓
Values / References
   ↓
Objects in Memory
   ↓
Garbage Collection
```

Once these two flows are clear, many JavaScript concepts that otherwise feel like separate topics start connecting naturally.

And that is the real goal of this section:

> **Don't just learn how to write JavaScript. Understand why JavaScript behaves the way it does.**
