/**
 * Bridge pattern
 * The Bridge is an approach to refactor already existing code, whereas the Adapter creates an interface 
 * on top of existing code through existing available means without refactoring any existing code or interfaces.
 * 
 * The motivation for converting your code to the Bridge pattern is that it may be tightly coupled. There is logic and abstraction 
 * close together that is limiting your choices in how you can extend your solution in the way that you need.
 */


class TraReimbursmentProcessor {
    processPaymentReimbursments(amount: number) {
        console.log('amount: ', amount);
        console.log('congratulations !!, The payment is successfull');
    }
}
class Org1 {
    name: string = 'M Com tech';
    constructor(paymentProcessor: TraReimbursmentProcessor) {
    }
}

class Org2 {
    name: string = 'C Com tech';
    constructor(paymentProcessor: TraReimbursmentProcessor) {

    }
}

const org1 = new Org1(new TraReimbursmentProcessor())
const org2 = new Org2(new TraReimbursmentProcessor())
