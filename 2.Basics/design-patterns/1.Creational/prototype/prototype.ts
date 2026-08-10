/**
 * As the name suggest to clone the objects { create a copy of object  }
 */


// function Car(model, year) {
//     this.model = model;
//     this.year = year;
// }

// Car.prototype.displayInfo = function () {
//     console.log(`Model: ${this.model}, Year: ${this.year}`);
// };

// const i10 = new Car('Hyundai', 2022);
// console.log('i10: ', i10.displayInfo());


// const verna = Object.create(Car.prototype);
// console.log('verna: ', verna.displayInfo());

class Car {
    // Type annotations for properties
    private model: string;
    private year: number;

    constructor(model: string, year: number) {
        this.model = model;
        this.year = year;
    }

    // Getter for model
    getModel() {
        return this.model;
    }

    // Getter for year
    getYear() {
        return this.year;
    }

    displayInfo() {
        console.log(`Car Model: ${this.model}, Manufacturing Year: ${this.year}`);
    }
}

/** 
 * ElectricCar is a subclass of Car with additional features.
 */
class ElectricCar extends Car {
    private batteryCapacity: number;
    constructor(model: string, year: number, batteryCapacity: number) {
        super(model, year);
        this.batteryCapacity = batteryCapacity;
    }

    // Getter method for batteryCapacity
    getBatteryCapacity() {
        return this.batteryCapacity;
    }

    displayBatteryInfo() {
        // Using getters for accessing properties
        console.log(`Model: ${this.getModel()}, Battery Capacity: ${this.getBatteryCapacity()} kWh`);
    }
}

const electricCar = new ElectricCar("Tesla", 2021, 75);
electricCar.displayInfo();
electricCar.displayBatteryInfo();



