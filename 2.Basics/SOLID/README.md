# SOLID PRINCIPLES

> **Five simple principles that help us write code that is easier to understand, maintain, change, test, and extend.**

SOLID is not a framework.

It is not a programming language.

It is not a set of rules that magically makes code perfect.

It is a collection of **five design principles** that help us think about how we structure our classes, responsibilities, and dependencies.

```text
S → Single Responsibility Principle
O → Open/Closed Principle
L → Liskov Substitution Principle
I → Interface Segregation Principle
D → Dependency Inversion Principle
```

The biggest mistake is trying to memorize the five full names without understanding what problem each one is trying to solve.

So we will learn them differently:

```text
Problem
   ↓
What is wrong?
   ↓
SOLID principle
   ↓
Code
   ↓
Output
   ↓
Better design
   ↓
Practical understanding
```

---

# 1. S — Single Responsibility Principle

## Simple Definition

> **A class should have one main responsibility.**

Or even simpler:

> **One class should not try to do everything.**

The idea is not literally:

> "A class can have only one method."

That is not what SRP means.

The idea is:

> **A class should have one clear reason to change.**

---

## The Problem

Suppose we create a `User` class:

```javascript
class User {
    createUser() {
        console.log("User created");
    }

    saveToDatabase() {
        console.log("Saved to database");
    }

    sendEmail() {
        console.log("Email sent");
    }
}
```

This class is doing several unrelated jobs:

```text
User
├── User logic
├── Database logic
└── Email logic
```

Now imagine the email system changes.

Why should our `User` class need to change because the email provider changed?

That is the problem.

---

## Better Design

Separate the responsibilities:

```javascript
class UserService {
    createUser() {
        console.log("User created");
    }
}

class UserRepository {
    save() {
        console.log("Saved to database");
    }
}

class EmailService {
    send() {
        console.log("Email sent");
    }
}
```

Now:

```text
UserService
    ↓
User-related logic

UserRepository
    ↓
Database-related logic

EmailService
    ↓
Email-related logic
```

Each class has a clearer responsibility.

### Output

```text
User created
Saved to database
Email sent
```

---

## Mental Model

```text
Bad:
One class
   ↓
Does everything

Good:
Class A → Responsibility A
Class B → Responsibility B
Class C → Responsibility C
```

---

# 2. O — Open/Closed Principle

## Simple Definition

> **Software should be open for extension but closed for modification.**

The simple idea is:

> **We should be able to add new behaviour without constantly changing already-working code.**

---

## The Problem

Suppose we calculate payment discounts:

```javascript
class Discount {
    calculate(type, price) {
        if (type === "regular") {
            return price * 0.9;
        }

        if (type === "premium") {
            return price * 0.8;
        }
    }
}
```

Now tomorrow we introduce:

```text
Gold
Student
Festival
Corporate
```

We keep modifying the same class.

That means every new type requires changing existing code.

---

## Better Design

We can separate the discount behaviour:

```javascript
class RegularDiscount {
    calculate(price) {
        return price * 0.9;
    }
}

class PremiumDiscount {
    calculate(price) {
        return price * 0.8;
    }
}

class GoldDiscount {
    calculate(price) {
        return price * 0.7;
    }
}
```

Now adding a new discount means creating a new class rather than modifying the existing discount implementations.

```text
Existing code
     ↓
Stays stable

New requirement
     ↓
Add new implementation
```

### Output

For a price of `1000`:

```text
Regular: 900
Premium: 800
Gold: 700
```

---

## Mental Model

> **Don't keep breaking old code every time a new requirement arrives.**

---

# 3. L — Liskov Substitution Principle

## Simple Definition

> **A child class should be usable wherever its parent class is expected without breaking the program's expected behaviour.**

This is one of the most misunderstood SOLID principles.

Let's make it simple.

Suppose:

```text
Bird
  ↓
Can fly
```

Now:

```text
Bird
├── Sparrow
└── Penguin
```

If the parent class promises:

```javascript
bird.fly();
```

then a Penguin creating an error because it cannot fly means our inheritance model is wrong.

The problem is not the Penguin.

The problem is that we gave the parent class an incorrect contract.

---

## Bad Example

```javascript
class Bird {
    fly() {
        console.log("Flying");
    }
}

class Penguin extends Bird {
    fly() {
        throw new Error("Penguins cannot fly");
    }
}
```

Now:

```javascript
function makeBirdFly(bird) {
    bird.fly();
}

makeBirdFly(new Penguin());
```

We break the expected behaviour.

---

## Better Design

Separate the concepts:

```javascript
class Bird {
    eat() {
        console.log("Eating");
    }
}

class FlyingBird extends Bird {
    fly() {
        console.log("Flying");
    }
}

class Sparrow extends FlyingBird {}

class Penguin extends Bird {}
```

Now:

```text
Bird
├── Sparrow
│    └── fly()
│
└── Penguin
```

The parent relationship now makes sense.

### Output

```text
Sparrow:
Eating
Flying

Penguin:
Eating
```

---

## Mental Model

> **Don't force a child class to behave like something it is not.**

Inheritance should represent a valid relationship.

---

# 4. I — Interface Segregation Principle

## Simple Definition

> **A class should not be forced to depend on methods that it does not need.**

Think of an interface as a contract.

Suppose we create one giant contract:

```text
Worker
├── work()
├── eat()
└── sleep()
```

Now imagine a robot worker.

Does a robot need:

```text
eat()
sleep()
```

Probably not.

So the contract is too large.

---

## Better Design

Split the contract according to responsibilities:

```text
Workable
    ↓
work()

Eatable
    ↓
eat()

Sleepable
    ↓
sleep()
```

Now different classes can implement only what they actually need.

For example:

```text
Human
├── work()
├── eat()
└── sleep()

Robot
└── work()
```

This is the basic idea behind Interface Segregation.

---

## TypeScript Example

JavaScript does not have native interfaces.

TypeScript provides explicit interface support:

```typescript
interface Workable {
    work(): void;
}

interface Eatable {
    eat(): void;
}

class Robot implements Workable {
    work(): void {
        console.log("Robot working");
    }
}
```

### Output

```text
Robot working
```

The Robot does not have to implement `eat()`.

---

## Mental Model

> **Don't create one giant contract when smaller, focused contracts make more sense.**

---

# 5. D — Dependency Inversion Principle

## Simple Definition

> **High-level code should not depend directly on low-level implementation details. Both should depend on an abstraction.**

This sounds difficult, but the basic problem is very simple.

Suppose our application directly depends on a specific email service:

```javascript
class GmailService {
    send(message) {
        console.log("Sending through Gmail:", message);
    }
}

class NotificationService {
    constructor() {
        this.emailService = new GmailService();
    }

    notify(message) {
        this.emailService.send(message);
    }
}
```

Now `NotificationService` is tightly coupled to `GmailService`.

If tomorrow we want:

```text
Gmail
Outlook
SendGrid
Amazon SES
```

we have to modify the high-level class.

---

## Better Design

Instead of hardcoding the dependency, inject it:

```javascript
class NotificationService {
    constructor(messageService) {
        this.messageService = messageService;
    }

    notify(message) {
        this.messageService.send(message);
    }
}

class GmailService {
    send(message) {
        console.log("Gmail:", message);
    }
}

class OutlookService {
    send(message) {
        console.log("Outlook:", message);
    }
}
```

Now:

```javascript
const gmail = new GmailService();

const notification = new NotificationService(gmail);

notification.notify("Welcome!");
```

Output:

```text
Gmail: Welcome!
```

We can replace Gmail:

```javascript
const outlook = new OutlookService();

const notification = new NotificationService(outlook);

notification.notify("Welcome!");
```

Output:

```text
Outlook: Welcome!
```

The `NotificationService` itself did not need to change.

---

# 6. Dependency Injection

This is where **Dependency Injection** becomes useful.

Instead of doing:

```javascript
this.service = new GmailService();
```

inside the class, we give the dependency to the class:

```javascript
new NotificationService(gmail);
```

So:

```text
Without DI:

NotificationService
        ↓
   GmailService


With DI:

NotificationService
        ↓
   dependency
        ↑
GmailService / OutlookService / MockService
```

This makes high-level code more flexible and easier to test.

---

# 7. How SOLID Connects With OOP

SOLID is not separate from OOP.

It is a way of applying good design principles while working with:

```text
Classes
Objects
Inheritance
Interfaces
Abstraction
Dependencies
```

This is why the OOP section comes first.

The concepts provide the building blocks.

SOLID helps us use those building blocks more carefully.

---

# 8. One Problem Can Involve Multiple SOLID Principles

Real-world code does not say:

```text
"Today I will use S."
"Tomorrow I will use O."
```

A single design decision may involve several SOLID principles.

For example:

```text
Notification System
        ↓
SRP
Separate notification responsibility

        ↓
OCP
Add new notification types without breaking old ones

        ↓
LSP
Implementations should honour the expected contract

        ↓
ISP
Keep contracts focused

        ↓
DIP
Inject the notification dependency
```

This is why SOLID should be understood as **design thinking**, not five isolated definitions.

---

# 9. SOLID in One Real-World Example

Imagine an e-commerce application.

We have:

```text
Order
Payment
Notification
Invoice
Database
```

A poor design might look like:

```text
Order
│
├── Calculate order
├── Save to database
├── Process payment
├── Send email
├── Generate invoice
└── Send SMS
```

One class is doing everything.

SOLID pushes us toward something more organised:

```text
OrderService
    ↓
Order logic

OrderRepository
    ↓
Database logic

PaymentService
    ↓
Payment logic

InvoiceService
    ↓
Invoice logic

NotificationService
    ↓
Notification logic
```

Now each part has a clearer responsibility and dependencies can be controlled.

---

# 10. SOLID — Complete Picture

```text
S — Single Responsibility
    ↓
One clear responsibility

O — Open/Closed
    ↓
Extend behaviour without constantly modifying old code

L — Liskov Substitution
    ↓
Child should correctly behave as its parent promises

I — Interface Segregation
    ↓
Don't force classes to depend on things they don't need

D — Dependency Inversion
    ↓
Depend on abstractions rather than concrete implementations
```

---

# 11. Candidate 1 vs Candidate 2

Knowing a definition and being able to **answer a real interview question** are two different things.

So let's imagine two candidates are asked the same question.

---

## Question 1: What is SOLID?

### Candidate 1

> "SOLID is a set of five object-oriented design principles. It helps us write code that is more maintainable, flexible, and easier to extend. The five principles are Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion."

Correct.

But mostly theoretical.

### Candidate 2

> "SOLID is basically how I try to keep my classes from becoming too dependent on each other or doing too many things. For example, if my OrderService is calculating orders, saving to the database, sending emails, and generating invoices, I would split those responsibilities. That's where SRP comes in. Then if I need to add another payment provider, I don't want to keep modifying the existing payment logic, so I would design it for extension. In real projects, I usually see SOLID as a set of design decisions rather than five definitions to memorize."

This answer demonstrates:

```text
Definition
+
Understanding
+
Practical experience
+
Reasoning
```

That is the difference.

---

# 12. Random Interview Question — SRP

### Interviewer

> "Can you give me a real example of Single Responsibility Principle?"

### Candidate 1

> "A class should have only one responsibility. For example, a User class should handle user-related operations and database operations should be handled separately."

Correct.

### Candidate 2

> "One example I have seen is when a service starts becoming a kind of god class. For example, an OrderService might calculate the order, save it, process payment, generate the invoice, and send notifications. Initially it works, but every change starts touching the same class. I would separate those responsibilities into OrderService, Repository, PaymentService, InvoiceService, and NotificationService. That way a change in the email provider doesn't require me to touch order calculation logic."

This answer demonstrates actual understanding of the problem SRP is trying to solve.

---

# 13. Random Interview Question — Dependency Inversion

### Interviewer

> "What is Dependency Inversion Principle?"

### Candidate 1

> "High-level modules should not depend directly on low-level modules. Both should depend on abstractions."

Technically correct.

### Candidate 2

> "I think of DIP as avoiding hard dependencies inside business logic. For example, if NotificationService directly creates a GmailService using `new GmailService()`, then the notification logic becomes coupled to Gmail. If tomorrow we move to another provider, I have to modify the service. Instead, I pass the notification dependency into the constructor. Now the same NotificationService can work with Gmail, Outlook, a mock service during testing, or another provider."

This answer shows:

```text
Definition
+
Problem
+
Example
+
Solution
+
Testing awareness
```

That is the level we want to reach.

---

# 14. Random Interview Question — Liskov Substitution

### Interviewer

> "Can you explain Liskov Substitution Principle with an example?"

### Candidate 1

> "A child class should be substitutable for its parent class without breaking the expected behaviour."

### Candidate 2

> "The classic example is a Bird and Penguin hierarchy. If my Bird abstraction says every bird can fly, then Penguin becomes a problem because it cannot fly. The issue is actually in my abstraction, not the Penguin. I would separate FlyingBird from the general Bird abstraction so that Sparrow can implement flying while Penguin doesn't have to pretend that it can. The important thing is that inheritance should represent a valid behavioural relationship, not just a convenient code-reuse relationship."

This answer demonstrates actual understanding.

---

# 15. The Final SOLID Mental Model

Do not memorize SOLID as five long definitions.

Remember the problems they are trying to prevent:

```text
S
↓
"Why is this class doing everything?"

O
↓
"Why do I have to keep modifying old code?"

L
↓
"Why does this child break when used as its parent?"

I
↓
"Why am I forcing this class to implement things it doesn't need?"

D
↓
"Why is my business logic directly tied to this implementation?"
```

If you can recognise these problems in real code, you are already understanding SOLID.

---

# Final Takeaway

SOLID is not about making code complicated.

In fact, the goal is the opposite:

> **Keep responsibilities clear.**

> **Keep dependencies manageable.**

> **Keep code easier to change.**

> **Keep implementations replaceable where appropriate.**

> **Keep contracts focused.**

And most importantly:

> **Don't apply SOLID just because someone told you to. Apply it when the design problem actually calls for it.**

That is the difference between **knowing SOLID** and **understanding SOLID**.
