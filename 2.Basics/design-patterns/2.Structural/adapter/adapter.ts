/**
 * connect two interfaces via medium { called adapter / wrapper } which is not possible because of their incapatibility
 * 
 * Health insurance :
 * to claim health policy settlement each company has its own set of parameters { documentation or process } that we require and need to folow
 * so we cant directly submit the bills to insurence company for claiming settlement
 * 
 * Solution : each hospital has a insurance office for that purpose which take bills from the user translate it in a form of document that is understandable for all health insurence companies 
 * and we can directly submit it to any health insurance company for claim settlement 
 * 
 * Hint : Insurance offie is acting as adapter/ wrapper here
 * 
 * 
 * note :  not used any harware type example like charger,laptop  adapter , socket
 */

interface InsuranceCompany {
    processClaim(document: string): void;
}

interface Hospital {
    generateBill(): string;
}

class MetLife implements InsuranceCompany {
    processClaim(document: string): void {
        console.log(`Processing claim with Metlife: ${document}`);
    }
}

class TataAig implements InsuranceCompany {
    processClaim(document: string): void {
        console.log(`Processing claim with TataAig: ${document}`);
    }
}

class CivilHospital implements Hospital {
    public generateBill(): string {
        return "Hospital Bill";
    }
}

/** Adapter */
class InsuranceOffice {
    private insuranceCompany: InsuranceCompany;

    constructor(insuranceCompany: InsuranceCompany) {
        this.insuranceCompany = insuranceCompany;
    }

    public translateAndSubmitClaim(bill: string): void {
        let translatedDocument = `Translated ${bill}`;
        this.insuranceCompany.processClaim(translatedDocument);
    }

    static Claim(hospital: Hospital, insuranceCompany: InsuranceCompany) {
        const bill = hospital.generateBill();
        let insuranceOffice = new InsuranceOffice(insuranceCompany);
        insuranceOffice.translateAndSubmitClaim(bill);
    }
}


// Usage
InsuranceOffice.Claim(new CivilHospital(), new MetLife())


// another usage 
const hospitalBill = (new CivilHospital()).generateBill();
const office = new InsuranceOffice(new MetLife());
const translatedBill = office.translateAndSubmitClaim(hospitalBill);



/** 
 * Best use case that we use in our pprojects to convert the DB returned date fomrats into `modern` and `legacy` date formats 
 */
function legacyDateFormat(date) {
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`; // DD/MM/YY
}

function modernDateFormat(date, options) {
    return date.toLocaleString('en-US', options);
}

/** adapter */
const formatDate = (dateString, formatType) => {
    const date = new Date(dateString);
    let options = {};

    switch (formatType) {
        case 'dd/mm':
            return legacyDateFormat(date);
        case 'dd/mm/yy':
            options = { year: '2-digit', month: '2-digit', day: '2-digit' };
            return modernDateFormat(date, options);
        case 'full':
            options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
            return modernDateFormat(date, options);
        default:
            return date.toISOString();
    }
};
console.log(formatDate('2024-01-24', 'dd/mm')); // Outputs using the legacy format system
console.log(formatDate('2024-01-24', 'dd/mm/yy')); // Outputs using the modern system
console.log(formatDate('2024-01-24', 'full')); 