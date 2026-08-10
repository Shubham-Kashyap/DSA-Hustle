/**
 * Decorator  
 */
// Decorator Concept Sample Code

interface IComponent {
    method(): string
}

class Component implements IComponent {
    method(): string {
        return 'Component Method'
    }
}

class Decorator implements IComponent {
    #object: IComponent

    constructor(object: IComponent) {
        this.#object = object
    }

    method(): string {
        return `Decorator Method (${this.#object.method()})`
    }
}

// The Client
const COMPONENT = new Component()
console.log(COMPONENT.method())

// The component can be decorated
const Decorated = new Decorator(COMPONENT)
console.log(Decorated.method())

// The decorated component can be decorated again
const Decorated2 = new Decorator(Decorated)
console.log(Decorated2.method())



interface Pizza {
    getDescription(): string;
    getCost(): number;
}

class PlainPizza implements Pizza {
    getDescription() {
        return "Plain Pizza";
    }

    getCost() {
        return 10.0;
    }
}

// Topping Decorator to generalize toppings addition
abstract class ToppingDecorator implements Pizza {
    protected pizza: Pizza;

    constructor(pizza: Pizza) {
        this.pizza = pizza;
    }

    abstract getDescription(): string;
    abstract getCost(): number;
}

// Generic Topping implementation
class Topping extends ToppingDecorator {
    private description: string;
    private cost: number;

    constructor(pizza: Pizza, description: string, cost: number) {
        super(pizza);
        this.description = description;
        this.cost = cost;
    }

    getDescription() {
        return this.pizza.getDescription() + ", " + this.description;
    }

    getCost() {
        return this.pizza.getCost() + this.cost;
    }
}

// Example usage
let plainPizza: Pizza = new PlainPizza();
console.log("Plain Pizza: ", { cost: plainPizza.getCost(), description: plainPizza.getDescription() });

let pizzaWithCheese: Pizza = new Topping(plainPizza, "cheese", 2.0);
console.log("Pizza with Cheese: ", { cost: pizzaWithCheese.getCost(), description: pizzaWithCheese.getDescription() });

let pizzaWithPepperoniAndCheese: Pizza = new Topping(pizzaWithCheese, "pepperoni", 3.0);
console.log("Pizza with Pepperoni and Cheese: ", { cost: pizzaWithPepperoniAndCheese.getCost(), description: pizzaWithPepperoniAndCheese.getDescription() });