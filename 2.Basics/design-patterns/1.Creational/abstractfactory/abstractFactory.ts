
/**
 * -------------------------------------------------------------------------------------
 * Abstract factory 
 * Intent :Define a class (referred to as a "super factory" or "factory of factories") that determines 
 * which concrete factory class to instantiate and use. This "super factory" delegates the responsibility 
 * of creating families of related objects to the selected factory class, based on specific requirements or conditions.
 * 
 * factory of factories
 * -------------------------------------------------------------------------------------
 * 
 * While doing payment on an ecomm platform like `flipkart`; for only payment purpose we can see multiple payment options
 * like google pay, card payment or online banking just to settle the purchase amount. Each one has different logic of their own to handle payments directly from bank acc.
 * 
 * we only fill the info as per our selected payment options
 * 
 * UPI payment : paypal, paytm, googlepay  
 * Card payment : credit, debit, visa
 * Online banking : online transaction
 * 
 */


/**
 * Online transaction factory
 */
abstract class PaymentInterface {
    abstract makePayment(amount: number): void;
}

abstract class UpiPayment extends PaymentInterface { }

abstract class CardPayment extends PaymentInterface {
    abstract getCardDetails(details): void;
}

class GooglePay extends UpiPayment {
    public makePayment(amount: number): void {
        console.log('Payment successful with GooglePay:', amount);
    }
}

class CreditCard extends CardPayment {
    private cardDetails;
    public getCardDetails(details): void {
        this.cardDetails = details;
    }
    public makePayment(amount: number): void {
        console.log('Payment successful with CreditCard:', amount, this.cardDetails);
    }
}

class DebitCard extends CardPayment {
    private cardDetails;
    public getCardDetails(details): void {
        this.cardDetails = details;
    }
    public makePayment(amount: number): void {
        console.log('Payment successful with DebitCard:', amount, this.cardDetails);
    }
}

class Paypal extends UpiPayment {
    public makePayment(amount: number): void {
        console.log('Payment successful with PayPal:', amount);
    }
}

/** Factories */
class UpiPaymentFactory {
    public static paymentMode(mode: string): UpiPayment {
        switch (mode) {
            case 'gpay': return new GooglePay();
            case 'paypal': return new Paypal();
            default: throw new Error(`Unsupported UPI payment mode: ${mode}`);
        }
    }
}

class CardPaymentFactory {
    public static paymentMode(mode: string): CardPayment {
        switch (mode) {
            case 'creditCard': return new CreditCard();
            case 'debitCard': return new DebitCard();
            default: throw new Error(`Unsupported card payment mode: ${mode}`);
        }
    }
}

class PaymentFactory {
    public static paymentMode(mode: string) {
        switch (mode) {
            case 'card': return CardPaymentFactory;
            case 'upi': return UpiPaymentFactory;
            default: throw new Error(`Unsupported payment mode: ${mode}`);
        }
    }
}

function payViaCard(amount, cardType: 'creditCard' | 'debitCard', cardDetails) {
    const cardFactory = PaymentFactory.paymentMode('card');
    const selectedCard = cardFactory.paymentMode(cardType) as CardPayment // or 'debitCard'
    selectedCard.getCardDetails(cardDetails);
    selectedCard.makePayment(amount);
}

function payViaUpi(amount, platform: 'gpay' | 'paytm' | 'paypal') {
    const upiFactory = PaymentFactory.paymentMode('upi');
    const pay: UpiPayment = upiFactory.paymentMode('gpay'); // or 'paypal'
    pay.makePayment(amount);
}

// Example Usage
payViaCard(5000, 'debitCard', {
    name: 'abc',
    cvv: 123,
    expiryDate: '02/33',
    cardNumber: '4588 5588 5555 5555',
});

payViaUpi(50, 'gpay');