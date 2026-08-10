# OOP AND UML

> **A simple, practical reference for understanding Classes, Objects, OOP concepts, Relationships, and UML — with JavaScript and TypeScript context.**

This section is about something every developer should understand properly:

> **How do we model real-world things in code?**

We often hear words like:

```text
Class
Object
Constructor
Method
Field
Static
Encapsulation
Abstraction
Inheritance
Interface
Coupling
UML
```

These concepts are not new.

But knowing the **actual meaning**, understanding **how they work**, and being able to explain them in simple words is still a big plus for any developer.

The goal of this README is not to use complicated, bookish definitions.

The goal is:

> **If I come back here after six months, I should read the definition and immediately understand what the concept actually means.**

---

# 1. JavaScript and TypeScript Context

Before going further, one thing should be clear.

This repository primarily works around the **JavaScript ecosystem**, and TypeScript is treated as a practical extension of that ecosystem.

TypeScript can be thought of as:

```text
JavaScript
    +
Static Type System
    +
Additional Language Features
    ↓
TypeScript
```

TypeScript code is ultimately transformed into JavaScript that can run in environments such as browsers and Node.js.

So throughout this README:

> **The OOP concept remains the main focus. JavaScript and TypeScript may express that concept differently.**

This distinction is important for concepts such as:

```text
void
interface
abstract class
abstract method
```

We should not think:

> "This is JavaScript vs TypeScript."

Instead:

> **"The OOP concept is the same; the language may provide different ways to express it."**

---

# 2. What is OOP?

**OOP = Object-Oriented Programming.**

It is a way of designing and writing programs around **objects and the data/behaviour associated with them**.

Think about a real-world `User`.

A user may have:

```text
Name
Email
Age
Password
```

These are the user's **data**.

The user may also perform actions:

```text
Login
Logout
Update Profile
Change Password
```

These are the user's **behaviours**.

In OOP, we try to represent such things in code.

```text
User
│
├── Data
│   ├── name
│   ├── email
│   └── age
│
└── Behaviour
    ├── login()
    ├── logout()
    └── updateProfile()
```

This is the basic idea behind Object-Oriented Programming.

---

# 3. What is a Class?

A **Class** is a blueprint or template that defines what an object can have and what it can do.

Example:

```javascript
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    login() {
        console.log(`${this.name} logged in`);
    }
}
```

Here:

```text
User
│
├── Data
│   ├── name
│   └── email
│
└── Behaviour
    └── login()
```

The class itself is the **blueprint**.

It does not represent one particular user yet.

---

# 4. What is an Object?

An **Object** is an actual instance created from a class.

```javascript
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

const user1 = new User("Shubham", "shubham@example.com");
const user2 = new User("Rahul", "rahul@example.com");
```

`User` is the class.

`user1` and `user2` are objects.

Think:

```text
Class
 ↓
Blueprint

Object
 ↓
Actual thing created from that blueprint
```

One class can create many objects.

```text
             User Class
            /          \
           /            \
       user1            user2
```

---

# 5. Fields / Attributes / Properties

A class can contain data that describes an object.

```javascript
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
```

Here:

```text
name
age
```

represent information about the object.

Depending on the language, these may be referred to as:

```text
Fields
Attributes
Properties
```

The exact terminology can vary slightly by language.

The basic idea remains:

> **They store information belonging to the object.**

---

# 6. Methods

A method is a function associated with a class/object.

```javascript
class User {
    login() {
        console.log("User logged in");
    }
}
```

Here:

```text
login()
```

is the method.

Simple mental model:

```text
Fields / Properties
    ↓
What does the object HAVE?

Methods
    ↓
What can the object DO?
```

---

# 7. Constructor

A constructor is a special method that runs when an object is created.

In JavaScript:

```javascript
class User {
    constructor(name) {
        this.name = name;
    }
}
```

When we create an object:

```javascript
const user = new User("Shubham");
```

the constructor is automatically called.

Think of the flow:

```text
new User("Shubham")
        ↓
Object creation
        ↓
constructor()
        ↓
name is initialized
        ↓
User object is ready
```

### JavaScript and TypeScript

The syntax is similar in both:

```typescript
class User {
    constructor(public name: string) {}
}
```

The important difference here is that TypeScript allows us to add explicit type information.

### Important terminology note

You may hear the definition:

> "A constructor has the same name as the class."

That is true for languages such as Java and C++.

In JavaScript and TypeScript, constructors use the special:

```text
constructor()
```

method syntax.

So always understand the **concept first**, then the syntax of the language you are using.

---

# 8. `new` Keyword

The `new` keyword is used to create an instance of a class.

```javascript
const user = new User("Shubham");
```

Conceptually:

```text
new
 ↓
Create an object
 ↓
Run constructor
 ↓
Return the new object
```

---

# 9. Void

The simple meaning of a **void method** is:

> **A method that does not return a value.**

For example, in TypeScript:

```typescript
function printUser(): void {
    console.log("User");
}
```

Here, `void` tells us that the function is not intended to return a value.

### JavaScript clarification

JavaScript does not use `void` as an explicit method return type in the same way TypeScript, Java, or C# can.

In JavaScript:

```javascript
function printUser() {
    console.log("User");
}
```

If there is no explicit `return`, the function returns:

```text
undefined
```

So:

```text
General OOP meaning
        ↓
No return value

JavaScript
        ↓
undefined when no value is returned

TypeScript
        ↓
void can explicitly describe the intended return type
```

---

# 10. Static

`static` means that a property or method belongs to the **class itself**, rather than individual objects.

Example:

```javascript
class MathHelper {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathHelper.add(10, 20));
```

Output:

```text
30
```

We do not need:

```javascript
const helper = new MathHelper();
```

because `add()` belongs to the class itself.

Think:

```text
Instance method
    ↓
object.method()

Static method
    ↓
Class.method()
```

---

# 11. Getter

A getter is used to **get/read a value**.

Simple mental model:

> **Getter → Get a value.**

```javascript
class User {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
}
```

Usage:

```javascript
const user = new User("Shubham");

console.log(user.name);
```

Output:

```text
Shubham
```

---

# 12. Setter

A setter is used to **set/update a value**.

Simple mental model:

> **Setter → Set a value.**

```javascript
class User {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}
```

Usage:

```javascript
const user = new User("Shubham");

user.name = "Rahul";

console.log(user.name);
```

Output:

```text
Rahul
```

So:

```text
Getter
  ↓
Read

Setter
  ↓
Update
```

---

# 13. Encapsulation

Encapsulation means:

> **Keeping data and the methods that work on that data together, while controlling how that data is accessed or modified.**

Example:

```javascript
class BankAccount {
    #balance = 0;

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    getBalance() {
        return this.#balance;
    }
}
```

Here, `#balance` cannot be directly accessed from outside the class.

Instead, we provide controlled methods:

```text
deposit()
getBalance()
```

The basic idea is:

```text
Internal Data
     ↓
Controlled Access
     ↓
Outside World
```

Encapsulation helps us protect the internal state of an object from uncontrolled modification.

---

# 14. Abstraction

Abstraction means:

> **Showing the important part and hiding unnecessary implementation details.**

Think about a car.

You know:

```text
Start
Accelerate
Brake
Steer
```

You do not need to understand every internal mechanical operation to drive the car.

Similarly, in software:

```text
User
 ↓
login()
```

The user only needs to know:

> "Call login."

The user does not necessarily need to know every internal step involved in authentication.

So:

```text
Abstraction
    ↓
Expose what is needed
    ↓
Hide unnecessary implementation details
```

---

# 15. Encapsulation vs Abstraction

These two are often confused.

### Encapsulation

Focuses on:

> **How do we protect and control access to data?**

### Abstraction

Focuses on:

> **What should we expose and what implementation details should we hide?**

Simple memory trick:

```text
Encapsulation
    ↓
Control access

Abstraction
    ↓
Hide complexity
```

They are related, but they are not the same thing.

---

# 16. Inheritance

Inheritance allows one class to reuse or extend another class.

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

const dog = new Dog();

dog.eat();
dog.bark();
```

Output:

```text
Eating
Barking
```

`Dog` inherited `eat()` from `Animal`.

Think:

```text
Animal
   ↓
  Dog
```

The child class gets behaviour from the parent class and can also add its own behaviour.

---

# 17. Parent and Child Class

In:

```javascript
class Dog extends Animal
```

we have:

```text
Animal
 ↓
Parent / Base / Superclass

Dog
 ↓
Child / Derived / Subclass
```

Different languages may use different terminology, but the relationship is the same.

---

# 18. Abstract Class

An abstract class is a class intended to act as a **base/template for other classes**, rather than being used directly as a normal object.

Conceptually:

```text
Animal
   ↓
Abstract Base
   ↓
Dog
Cat
```

### TypeScript

TypeScript explicitly supports abstract classes:

```typescript
abstract class Animal {
    abstract makeSound(): void;

    eat(): void {
        console.log("Eating");
    }
}
```

A child class can then implement the required method:

```typescript
class Dog extends Animal {
    makeSound(): void {
        console.log("Bark");
    }
}
```

### JavaScript

JavaScript does not have a native `abstract` class keyword.

The concept can be simulated using normal classes and runtime checks.

So:

> **Abstract class is an OOP concept, and TypeScript provides explicit syntax for it.**

---

# 19. Abstract Method

An abstract method represents a method that a child class is expected to implement.

Conceptually:

```text
Animal
   ↓
makeSound()
   ↓
Every child must provide its own implementation
```

For example:

```typescript
abstract class Animal {
    abstract makeSound(): void;
}
```

Then:

```typescript
class Dog extends Animal {
    makeSound(): void {
        console.log("Bark");
    }
}
```

Output:

```text
Bark
```

JavaScript does not provide a native `abstract` method keyword.

The concept can be simulated with patterns such as throwing an error from a base method:

```javascript
class Animal {
    makeSound() {
        throw new Error("makeSound() must be implemented");
    }
}
```

---

# 20. Interface

The simplest way to remember an interface is:

> **An Interface is a contract.**

It describes what capabilities a class is expected to provide.

For example:

```text
Payment
│
├── pay()
└── refund()
```

Think:

```text
Interface
    ↓
Contract
    ↓
"What should this class provide?"
```

### TypeScript

TypeScript provides explicit interface support:

```typescript
interface Payment {
    pay(amount: number): void;
    refund(amount: number): void;
}
```

A class can implement that contract:

```typescript
class CreditCardPayment implements Payment {
    pay(amount: number): void {
        console.log(`Paid ${amount}`);
    }

    refund(amount: number): void {
        console.log(`Refunded ${amount}`);
    }
}
```

### JavaScript

JavaScript does not have a native `interface` keyword.

The same conceptual idea can be achieved through conventions, documentation, TypeScript, or runtime validation.

So again:

> **The concept is common OOP. TypeScript provides explicit language support for it.**

---

# 21. Coupling

Coupling tells us:

> **How much one class or component depends on another class or component.**

For example:

```text
Class A
   ↓
depends on
   ↓
Class B
```

There is coupling between them.

The important question is:

> **How much dependency exists?**

---

# 22. Tight Coupling

Tightly coupled means:

> **There is a high level of dependency between components.**

Example:

```text
Class A
   ↓↓↓↓↓
Class B
```

If Class B changes, Class A may also need significant changes.

This makes the system harder to maintain and change.

---

# 23. Loose Coupling

Loosely coupled means:

> **There is less dependency between components.**

Example:

```text
Class A
   ↓
Contract / Abstraction
   ↑
Class B
```

Class A does not need to know every internal detail of Class B.

This generally makes the system:

```text
Easier to change
Easier to test
Easier to maintain
Easier to extend
```

Simple memory trick:

```text
Tight Coupling
    ↓
More dependency

Loose Coupling
    ↓
Less dependency
```

---

# 24. UML

**UML = Unified Modeling Language.**

UML is a standard way of visually representing the structure and relationships of software systems.

Instead of explaining everything using code, we can draw it.

Example:

```text
+----------------------+
|        User          |
+----------------------+
| - name: String       |
| - age: Number        |
+----------------------+
| + login(): void      |
| + logout(): void     |
+----------------------+
```

This diagram gives us a quick picture of the class.

---

# 25. UML Class Diagram

A basic UML class diagram is divided into three sections:

```text
+-------------------------+
| Class Name              |
+-------------------------+
| Attributes / Properties |
+-------------------------+
| Methods                 |
+-------------------------+
```

For example:

```text
+----------------------+
|       User           |
+----------------------+
| - name: String       |
| - age: Number        |
+----------------------+
| + login(): void      |
| + logout(): void     |
+----------------------+
```

---

# 26. UML Visibility Notations

The symbols used before attributes and methods have meaning.

```text
+   Public
-   Private
#   Protected
~   Package / Default
```

For example:

```text
+ login()
- password
# calculateSalary()
```

Means:

```text
+ → Public
- → Private
# → Protected
~ → Package / Default
```

The exact visibility support depends on the programming language, but these are standard UML notations.

---

# 27. UML Type Notation

Consider:

```text
- name: String
- age: Number
```

The structure is:

```text
visibility  name : type
```

So:

```text
-       → Private
name    → Attribute name
String  → Type
```

For a method:

```text
+ login(): void
```

means:

```text
+       → Public
login() → Method
void    → Return type
```

---

# 28. UML Inheritance Relationship

Inheritance is represented using a line with a **hollow triangle arrow** pointing towards the parent/base class.

Conceptually:

```text
        Animal
          △
          |
          |
         Dog
```

This means:

```text
Dog
 ↓
inherits from
 ↓
Animal
```

The direction is important.

The triangle points toward the **parent/base class**.

---

# 29. Why UML is Useful

Imagine a large software system containing:

```text
User
Admin
Customer
Payment
Order
Product
Invoice
Notification
```

Reading hundreds of lines of code just to understand relationships can be difficult.

A UML diagram can give us a high-level picture.

For example:

```text
User
 ↓
Order
 ↓
Payment
```

or:

```text
Animal
 ├── Dog
 ├── Cat
 └── Bird
```

UML helps us:

* Visualise structure
* Understand relationships
* Communicate design
* Discuss architecture
* Plan before implementation

---

# 30. OOP Concepts — Quick Revision

```text
Class
    ↓
Blueprint

Object
    ↓
Actual instance of a class

Constructor
    ↓
Runs when an object is created

Method
    ↓
Behaviour of an object

Field / Property
    ↓
Data belonging to an object

Static
    ↓
Belongs to the class itself

Getter
    ↓
Get / read a value

Setter
    ↓
Set / update a value

Encapsulation
    ↓
Control access to internal data

Abstraction
    ↓
Hide unnecessary complexity

Inheritance
    ↓
Reuse / extend behaviour from another class

Interface
    ↓
Contract

Coupling
    ↓
Level of dependency between components

Tight Coupling
    ↓
More dependency

Loose Coupling
    ↓
Less dependency

UML
    ↓
Visual language for representing software design
```

---

# 31. JavaScript vs TypeScript — Quick Reference

| Concept                   | JavaScript                     | TypeScript |
| ------------------------- | ------------------------------ | ---------- |
| Class                     | Yes                            | Yes        |
| Object                    | Yes                            | Yes        |
| Constructor               | Yes                            | Yes        |
| Static                    | Yes                            | Yes        |
| Getter / Setter           | Yes                            | Yes        |
| Encapsulation             | Yes                            | Yes        |
| Inheritance               | Yes                            | Yes        |
| `void` return type        | No explicit method return type | Yes        |
| Interface                 | No native `interface` keyword  | Yes        |
| Abstract class            | No native `abstract` keyword   | Yes        |
| Abstract method           | No native keyword              | Yes        |
| Explicit type annotations | No                             | Yes        |

The important point is:

> **JavaScript and TypeScript share the same ecosystem and many of the same OOP concepts. TypeScript simply provides additional type-system and language features that make some of these concepts explicit.**

---

# 32. The Big Picture

All these concepts are connected.

```text
                    OOP
                     |
        +------------+------------+
        |            |            |
      Class        Object      Behaviour
        |
   +----+----+
   |         |
 Data      Methods
   |
Encapsulation
   |
Abstraction
   |
Inheritance
   |
Interface
   |
Coupling
   |
  UML
```

The goal is not to memorize these words individually.

The goal is to understand:

> **How these concepts help us design software that is organised, understandable, maintainable, and easier to change.**

And that is the real reason these concepts still matter today.

---

# Final Mental Model

### What is a Class?

> **A blueprint for creating objects.**

### What is an Object?

> **An actual instance created from a class.**

### What is a Constructor?

> **A special method that runs when an object is created and is commonly used to initialise it.**

### What is Void?

> **A concept used to indicate that a method does not return a value. JavaScript functions without an explicit return produce `undefined`, while TypeScript can explicitly use `void` as a return type.**

### What is Static?

> **Something that belongs to the class itself rather than an individual object.**

### What is Encapsulation?

> **Keeping data and its behaviour together while controlling access to the internal state.**

### What is Abstraction?

> **Showing what is necessary and hiding unnecessary implementation details.**

### What is Inheritance?

> **Allowing one class to reuse or extend another class.**

### What is an Interface?

> **A contract that defines what capabilities a class should provide.**

### What is Coupling?

> **The level of dependency between components.**

### What is Tight Coupling?

> **High dependency.**

### What is Loose Coupling?

> **Low dependency.**

### What is UML?

> **A visual language used to represent the structure and relationships of software systems.**

That is the foundation.

Once these concepts are clear, we can start looking at **Design Patterns and SOLID** not as random interview terms, but as practical ways of designing better software.
