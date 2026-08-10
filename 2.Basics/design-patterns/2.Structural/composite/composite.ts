/** Combine all as one */

interface Component {
    calculate(): number;
}

class BaseSalary implements Component {
    private amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }
    method(): string {
        throw new Error("Method not implemented.");
    }

    calculate(): number {
        return this.amount;
    }
}

class Bonus implements Component {
    private amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }
    method(): string {
        throw new Error("Method not implemented.");
    }

    calculate(): number {
        return this.amount;
    }
}

class Allowance implements Component {
    private amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }
    method(): string {
        throw new Error("Method not implemented.");
    }

    calculate(): number {
        return this.amount;
    }
}

class Deduction implements Component {
    private amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }
    method(): string {
        throw new Error("Method not implemented.");
    }

    calculate(): number {
        return this.amount;
    }
}

class CompositeCTC implements Component {
    method(): string {
        throw new Error("Method not implemented.");
    }
    private components: Component[] = [];

    add(component: Component): void {
        this.components.push(component);
    }

    remove(component: Component): void {
        const index = this.components.indexOf(component);
        if (index !== -1) {
            this.components.splice(index, 1);
        }
    }

    calculate(): number {
        let totalCTC = 0;
        for (const component of this.components) {
            totalCTC += component.calculate();
        }
        return totalCTC;
    }
}

// Usage
const ctc = new CompositeCTC();
ctc.add(new BaseSalary(50000));
ctc.add(new Bonus(10000));
ctc.add(new Allowance(5000));
ctc.add(new Deduction(2000));

console.log("Total CTC:", ctc.calculate());
