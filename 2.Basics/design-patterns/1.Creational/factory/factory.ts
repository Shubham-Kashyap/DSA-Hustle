/**
 * ------------------------------------------------------------------------
 * Factory pattern
 * ------------------------------------------------------------------------
 * Intent: Define an class {factory class}, and let that class to choose which subclass to instantiate based on requirement.
 * The Factory class allows a class to defer instantiation to subclasses. { allow a class to delegate the responsibility of object creation to its subclasses. }
 * 
 * Points to remember in OOP design
 * -- deals with superclass { abstract class } or an interface that has multiple child classes
 * -- create a new class { called factory class } that act as a factory and responsible for 
 *    instantating {creating} objects based on the input param passed 
 * -- factory class is the one that decides which decides what subclass is considered for 
 *    object creation based on input passed
 * -- mostly used when don't know which class object is created; we can't create each and every class object in advance 
 *    like while dealing with multiple databases
 */


/**
 * ------------------------------------------------------------------------
 * Attempt 1
 * ------------------------------------------------------------------------
 */

// NOTE : if we are using the abstract class we can use both `extends` and `implements`;
// is act as both contract { interface } and implemetaiton of class

// abstract class PaymentMethod {
//     // Note : derivide class can use this method as it is or overide it and can also used bot
//     // public makePayment(amount: number) { }

//     //Note : it is a template based on which derived class can have its own waay of implementation
//     public abstract makePayment(amount: number)
// }

interface PaymentMethod {
    makePayment: (amount: number) => void
}



/** Change `implemants` to `extends` when using abstract class  */
class GooglePay implements PaymentMethod {
    makePayment(amount: number) {
        console.log('Processsig amount via google pay ', amount)
        return `${amount} paid !!!`
    }
}
class PayTm implements PaymentMethod {
    makePayment(amount: number) {
        console.log('Processsig amount via payTm ', amount)
        return `${amount} paid !!!`
    }
}
class CreditCard implements PaymentMethod {
    makePayment(amount: number) {
        console.log('Processsig amount via credit card ', amount)
        return `${amount} paid !!!`
    }
}
class DebitCard implements PaymentMethod {
    makePayment(amount: number) {
        console.log('Processsig amount via debit card ', amount)
        return `${amount} paid !!!`
    }
}
class BankTransfer implements PaymentMethod {
    makePayment(amount: number) {
        console.log('Processsig amount via online bank transfer ', amount);
    }
}

// factory class 
class Payment {
    
    // Note : use switch cases may get heavy per case increases 
    static getPaymentMethod(method: string): PaymentMethod {
        switch (method) {
            case 'creditCard':
                return new CreditCard();
            case 'debitCard':
                return new DebitCard();
            case 'gpay':
                return new GooglePay();
            case 'paytm':
                return new PayTm();
            case 'bankTransfer':
                return new BankTransfer();
            default:
                throw new Error('Unsupported payment method');
        }
    }
}

const paymentMethod = Payment.getPaymentMethod('gpay');
console.log('pay 1500 via googlepay ', paymentMethod.makePayment(1500));

// OR

console.log(Payment.getPaymentMethod('gpay').makePayment(1500));




/**
 * ------------------------------------------------------------------------
 * Attempt 1
 * ------------------------------------------------------------------------
 */

interface DB {
    getConnection: () => string;
}

class Mongo implements DB {
    getConnection() {
        console.log("Connecting to MOngo DB");
        return "Connection Succeed !!" // or connection object
    }
}

class MySQL implements DB {
    getConnection() {
        console.log("Connecting to MySQL DB");
        return "Connection Succeed !!" // or connection object
    }
}

export abstract class Connection {
    static connect(db: string): DB {
        switch (db) {
            case 'mongo':
                return new Mongo();
            case 'mysql':
                return new MySQL();
            default:
                throw new Error('Unsupported CONNECTION STRING passed');
        }
    }
}
const selectedDB = Connection.connect('mongo').getConnection()
console.log("Connection.connect('mongo')", selectedDB);
