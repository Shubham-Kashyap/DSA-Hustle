# DSA Hustle — Data Structures & Algorithms

> **A practice-first journey into Data Structures and Algorithms using JavaScript.**

Welcome to the **DSA Hustle**.

This repository is not meant to be just a collection of solutions.

The purpose is to understand **how we think about data, how we organise it, and how we design a sequence of steps to solve problems efficiently.**

Before jumping into Arrays, Linked Lists, Trees, Graphs, Sorting, Searching, Dynamic Programming, and other advanced concepts, we first need to build the foundation.

This section covers three basic questions:

1. **What is a Data Structure?**
2. **What is an Algorithm?**
3. **What are Primitive and Non-Primitive Data Types / Structures?**

Let's build the foundation first.

---

# 1. What is a Data Structure?

The answer is very simple!

> **A Data Structure is a way of organising and storing data on a computer so that it can be used effectively!**

Simple, isn't it?

Let's understand it with a very simple real-world example.

## Think About a Library

Suppose you have a bunch of books, like the ones that are present in a library.

What are you gonna do next?

You will **organise and store them on a shelf**, right?!

You are not going to simply throw all the books into one place.

You will organise them properly so that whenever you need a particular book, you can:

* Find it
* Get it
* Read it
* Search for it
* Get its details whenever required

This is what a **Data Structure** means at its core.

It is about **how you organise and store something so that you can use it effectively whenever you need it.**

---

## Now, in Technical Terms

Let's bring the same idea into programming.

Think about how you can store and organise data using a piece of code so that anyone — or any part of the software — can:

* Get the data
* Search for the data
* Read the data
* Fetch details
* Modify the data
* Use the data whenever required

That is when these concepts come in handy.

Just like we organised the books in our library so that:

> **You can get and read the book whenever you want.**

And:

> **You can get the details of the book whenever you need them.**

In programming, we use Data Structures to organise our data in a way that makes these operations possible and manageable.

---

## The Core Idea

So, at the end of our example, the idea is very simple:

> **Through Data Structures, we can store, organise, and group data during program execution so that it can be used whenever and wherever it is required.**

That is the basic idea we need to understand before moving further into the world of Data Structures.

---

## Some More Real-World Examples

The library example is just one way to understand the concept.

There are many situations around us where data needs to be **organised, managed, and used according to a requirement.**

### 1. People Waiting in a Queue

Think about people waiting in the waiting area of a hospital.

Patients are waiting for their turn to get checked by a doctor.

```text
Patient 1
   ↓
Patient 2
   ↓
Patient 3
   ↓
Patient 4
```

A software system can manage this waiting process using Data Structures.

The system needs to know:

* Who is waiting?
* Who came first?
* Who should be checked next?
* Who has already been checked?
* Who is still waiting?

This is a real-world situation that can be represented and managed using Data Structures.

---

### 2. People Waiting in a Line at a Ticket Window

Think about people standing in a line at a ticket counter.

The system needs to manage:

* Who came first?
* Who should get the ticket first?
* Who is next?
* Who is still waiting?

Again, this can be managed through software systems based on Data Structures.

---

## The Bigger Picture

You can consider **any situation where you see data being managed and used according to a requirement.**

For example:

```text
Library
    ↓
Books need to be organised and found

Hospital
    ↓
Patients need to be managed in a waiting system

Ticket Counter
    ↓
People need to be managed in a line

Bank
    ↓
Customers need to be managed and served

Social Media
    ↓
Users, posts, comments and relationships need to be managed

E-Commerce
    ↓
Products, orders, customers and transactions need to be managed
```

The real-world situation changes.

The data changes.

The requirement changes.

But the underlying idea remains the same:

> **How can we organise and store the data so that we can use it effectively when we need it?**

And that is where **Data Structures** come into the picture.

---

# 2. What is an Algorithm?

The answer is very simple!

> **An Algorithm is a sequence of steps taken by you to accomplish a task!**

Simple, isn't it?

Let's understand it with a simple real-world example.

---

## Think About Planning a Trip

Suppose you have to prepare for a tour to a place you want to visit the most.

Let's say you are planning an **abroad trip**.

Now think about it.

What sequence of steps will you take to accomplish this task?

You cannot simply wake up one morning and say:

> "Let's go abroad!"

You need to follow some steps.

### Step 1 — Gather the Details

First, gather the details about what you need for the tour.

For example:

```text
Where do I want to go?
How many days will I stay?
What places do I want to visit?
What things do I need?
What will be the approximate budget?
```

---

### Step 2 — Requirement Gathering

Now decide:

> **What needs to be included and what should not be included?**

For example:

```text
Which places do I want to visit?
Which activities do I want to do?
What things do I need to carry?
What things are unnecessary?
```

This is basically **requirement gathering**.

We first understand what is actually required to accomplish the task.

---

### Step 3 — Prepare the Things You Need

Now start preparing the things required for the trip.

For example:

```text
Iron your clothes
Pack your clothes
Prepare your documents
Keep your passport
Keep your necessary belongings
```

You are preparing everything according to the requirements you gathered earlier.

---

### Step 4 — Plan the Trip

Now plan the actual trip.

For example:

```text
Book the tickets
Book the hotel
Plan the places you want to visit
Decide the schedule
Prepare everything according to the plan
```

Everything is now being done in a particular sequence.

---

### Step 5 — That's It!

Once all these steps are completed:

```text
Details gathered
      ↓
Requirements identified
      ↓
Things prepared
      ↓
Trip planned
      ↓
Tickets and hotel booked
      ↓
Ready for the trip
```

That's it!

**This is the basic idea of an Algorithm.**

---

## So, What Did We Actually Do?

We had one task:

> **Prepare for an abroad trip.**

Instead of trying to accomplish everything randomly, we divided the task into a **sequence of steps**.

```text
Task
 ↓
Step 1
 ↓
Step 2
 ↓
Step 3
 ↓
Step 4
 ↓
Task Completed
```

Each step moves us closer to accomplishing the final task.

And that is what an Algorithm is all about.

---

## Now Think in Technical Terms

Let's bring the same idea into programming.

Suppose we want a computer program to accomplish a particular task.

The computer does not simply understand our final goal and magically complete it.

We need to provide it with a proper sequence of instructions.

So, in technical terms:

> **An Algorithm is a set of well-defined steps or rules that a computer program follows to accomplish a specific task or solve a particular problem.**

In simple words:

> **We define what needs to happen, step by step, so that the computer can execute those steps and produce the required result.**

For example, suppose we want to find the largest number from an array.

We can think about the task like this:

```text
Task:
Find the largest number
        ↓
Start with the first number
        ↓
Compare it with the next number
        ↓
Keep the larger number
        ↓
Continue until the array ends
        ↓
Return the largest number
```

These steps together form the **algorithm** for solving that particular problem.

---

# 3. Data Structures + Algorithms

Now an important connection starts to appear.

We have already learned:

> **A Data Structure is a way of organising and storing data.**

And now we have learned:

> **An Algorithm is a sequence of steps used to accomplish a task or solve a problem.**

So:

```text
DATA STRUCTURE
        ↓
How do we organise and store the data?

ALGORITHM
        ↓
What steps do we take to work with that data?
```

And this is exactly why we study:

# DATA STRUCTURES + ALGORITHMS

A good DSA solution is not only about knowing the data.

It is about knowing:

> **How should I organise the data?**

and:

> **What sequence of steps should I follow to solve the problem efficiently?**

That is the foundation of **Data Structures and Algorithms**.

---

# 4. Primitive and Non-Primitive Data Types / Structures

Before going deeper into Data Structures, we need to understand one more basic concept:

> **What kind of data are we actually working with?**

This is where **Primitive and Non-Primitive** types come into the picture.

These concepts can vary from language to language.

For example, languages such as C++, Java, and Python may represent and classify some types differently.

Since this DSA journey is based on **JavaScript**, we will understand the classification from the JavaScript perspective.

---

# 4.1 Primitive Data Types

A **Primitive value** is a basic, single value.

JavaScript has **7 primitive data types**:

```text
Primitive Data Types
│
├── Number
├── BigInt
├── String
├── Boolean
├── Undefined
├── Null
└── Symbol
```

Let's understand them one by one.

---

## Number

JavaScript uses the `Number` type for numeric values.

This includes both:

* Whole numbers
* Decimal numbers

Examples:

```javascript
let age = 25;
let count = 100;

let price = 99.99;
let percentage = 87.5;
```

In languages where `Integer` and `Float` are separate types, we may think of them separately.

But in JavaScript:

```text
25      → Number
25.5    → Number
1000    → Number
3.14    → Number
```

So JavaScript uses `Number` for normal numeric values.

---

## BigInt

`BigInt` is used when we need to work with very large integers.

Example:

```javascript
let bigNumber = 123456789012345678901234567890n;
```

The `n` at the end tells JavaScript that this is a `BigInt`.

BigInt is not commonly required in normal DSA problems, but it is still one of JavaScript's primitive data types.

---

## String

A `String` represents text.

Examples:

```javascript
let name = "Shubham";
let message = "Hello";
let language = "JavaScript";
```

A string can contain one character or many characters:

```text
"A"
"Hello"
"Data Structure"
```

An important JavaScript-specific point:

> **JavaScript does not have a separate Character / Char primitive type.**

So:

```javascript
let character = "A";
```

is still a:

```text
String
```

Strings will become very important in DSA.

We will eventually work with:

```text
String Traversal
String Reversal
Palindrome
Anagram
Character Frequency
Substring
Subsequence
Pattern Matching
Sliding Window
Two Pointer
```

---

## Boolean

A Boolean represents a logical value.

It has only two possible values:

```javascript
true
false
```

For example:

```javascript
let isLoggedIn = true;
let isAdmin = false;
let found = true;
```

Boolean values are heavily used in algorithms:

```javascript
let found = false;

if (arr[i] === target) {
    found = true;
}
```

Later, in Graph problems, we will frequently use concepts such as:

```javascript
visited[node] = true;
```

---

## Undefined

`undefined` generally means:

> **A value has not been assigned.**

Example:

```javascript
let x;

console.log(x);
// undefined
```

We can also encounter `undefined` when trying to access something that does not exist.

```javascript
let numbers = [10, 20, 30];

console.log(numbers[10]);
// undefined
```

---

## Null

`null` represents the intentional absence of a value.

A simple way to remember the difference:

```text
undefined
    ↓
No value has been assigned.

null
    ↓
We intentionally say:
"There is no value here."
```

For example:

```javascript
let currentNode = null;
```

This becomes especially useful when we work with Linked Lists:

```text
10 → 20 → 30 → null
```

Here, `null` tells us that there is no next node after `30`.

---

## Symbol

`Symbol` is another primitive data type in JavaScript.

A Symbol represents a unique value.

Example:

```javascript
let id = Symbol("id");
```

Two Symbols with the same description are still different:

```javascript
let a = Symbol("id");
let b = Symbol("id");

console.log(a === b);
// false
```

Symbol is not something we will frequently use in normal DSA problems, but it is part of JavaScript's primitive type system.

---

# 4.2 Primitive Types — Complete Picture

```text
JAVASCRIPT PRIMITIVE DATA TYPES
│
├── Number
│   ├── Whole numbers
│   └── Decimal numbers
│
├── BigInt
│   └── Very large integers
│
├── String
│   └── Text / sequence of characters
│
├── Boolean
│   └── true / false
│
├── Undefined
│   └── Value not assigned
│
├── Null
│   └── Intentional absence of value
│
└── Symbol
    └── Unique identifier/value
```

---

# 4.3 Non-Primitive / Complex Structures

Now we move to the second major category.

Primitive values are basic individual values.

But real programs rarely work with only one value at a time.

Imagine we need to store:

```text
100 students
1000 products
Millions of transactions
A social network
A family hierarchy
A road network
```

We need ways to **combine, organise, connect, and manage multiple pieces of data.**

This is where non-primitive structures become important.

### Simple Definition

> **Non-Primitive Data Structures are structures that can represent and organise collections of data or more complex relationships between data.**

In simple words:

> **Primitive types give us individual pieces of information. Non-Primitive structures help us build something bigger using those pieces.**

For example:

```text
10
20
30
40
50
```

are individual values.

But:

```javascript
let numbers = [10, 20, 30, 40, 50];
```

gives those values an organisation.

That is where Data Structures become much more interesting.

---

# 4.4 Important Non-Primitive Structures in JavaScript

From the JavaScript perspective, we commonly work with:

```text
Non-Primitive / Complex Structures
│
├── Object
├── Array
├── Map
├── Set
├── Function
└── Other built-in objects
```

But there is an important distinction:

> **Programming-language objects and DSA data structures are not always exactly the same thing.**

For our DSA journey, we will focus on structures that help us solve algorithmic problems.

These include:

```text
Array
Linked List
Stack
Queue
Deque
Hash Table
Hash Map
Hash Set
Tree
Heap
Trie
Graph
```

---

# 5. The Bigger DSA Picture

Now our foundation starts to connect.

```text
DATA
│
├── Primitive
│   ├── Number
│   ├── BigInt
│   ├── String
│   ├── Boolean
│   ├── Undefined
│   ├── Null
│   └── Symbol
│
└── Non-Primitive / Complex
    ├── Object
    ├── Array
    ├── Map
    ├── Set
    └── Other Objects
```

And the actual DSA world expands into:

```text
DATA STRUCTURES
│
├── Linear
│   ├── Array
│   ├── Linked List
│   ├── Stack
│   ├── Queue
│   └── Deque
│
├── Non-Linear
│   ├── Tree
│   ├── Heap
│   ├── Trie
│   └── Graph
│
└── Hash-Based
    ├── Hash Table
    ├── Hash Map
    └── Hash Set
```

---

# 6. The Most Important Mental Model

At this point, remember these three questions.

### Question 1

> **What kind of data do I have?**

This is where **Data Types** come into the picture.

### Question 2

> **How should I organise this data?**

This is where **Data Structures** come into the picture.

### Question 3

> **What sequence of steps should I follow to solve the problem?**

This is where **Algorithms** come into the picture.

So the complete picture becomes:

```text
DATA TYPE
    ↓
What kind of data is this?

DATA STRUCTURE
    ↓
How should I organise and manage this data?

ALGORITHM
    ↓
What steps should I follow to solve the problem?
```

And that is the foundation of our entire **DSA journey**.

---

# Final Thought

Do not think of Data Structures and Algorithms as something complicated at the beginning.

Think about them in the simplest possible way:

> **Data Structures are different ways of organising data according to our needs.**

> **Algorithms are sequences of steps that help us accomplish a task or solve a problem.**

And programming languages such as JavaScript give us the tools through which we can implement these ideas.

The real DSA journey begins when we start asking:

> **Which Data Structure should I use?**

> **Why should I use it?**

> **What problem does it solve?**

> **What sequence of steps should I follow?**

> **Can I solve the problem efficiently?**

Those questions will take us from the basic concepts in this README all the way to real-world and interview-level problem solving.

**This is where the DSA Hustle begins.**
