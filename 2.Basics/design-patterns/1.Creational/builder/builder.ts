/** 
 * Builder pattern 
 * used where step by step creation of object is required  to get the task done
 * where we got many optional and required fields { whats needed in the product as output and output varients } 
 * 
 * Used where it is a clear dependency of first function on another function to build product
 */


interface CardPaymentInterface {
    cardDetails(cardDetails),
    amountToPay(amount: number),
    performTransaction(): void
}

class Payment implements CardPaymentInterface {
    private cardType: string;
    private amount: number;
    private card: any;

    constructor(builder: PaymentBuilder) {
        this.cardType = builder.getCardType();
        this.amount = builder.getAmount();
        this.card = builder.getCardDetails();
        this.performTransaction()
    }
    cardDetails(cardDetails): void {
        this.card = cardDetails;
        // Additional verification logic
    }

    amountToPay(amount: number): void {
        this.amount = amount;
        // Additional amount verification logic
    }
    performTransaction() {
        console.log("Transaction successful  " + this.amount);
        // Perform transaction logic
    }

    // Other methods
}

class PaymentBuilder {
    private cardType: string;
    private amount: number;
    private card: { [key: string]: any };

    /** setters */
    chooseCard(cardType: 'visa' | 'credit' | 'debit'): PaymentBuilder {
        this.cardType = cardType;
        return this;
    }

    amountToPay(amount: number): PaymentBuilder {
        this.amount = amount;
        return this;
    }

    cardDetails(card): PaymentBuilder {
        this.card = card;
        return this;
    }

    build(): Payment {
        return new Payment(this);
    }

    /** getters  */
    getCardType(): string {
        return this.cardType;
    }

    getAmount(): number {
        return this.amount;
    }

    getCardDetails(): any {
        return this.card;
    }
}

const paymentViaCard = new PaymentBuilder();


paymentViaCard.chooseCard('visa')
    .amountToPay(5000)
    .cardDetails({ name: 'abc', cvv: 123, number: "5555 5555 5555 5555", expiry: "25/12" })
    .build();



// other example might be -- pizza toppings , roof builder, houde builder applications