
const value_symbols = new Map([
    [1000, 'M'], [900, 'CM'], [500, 'D'],
    [400, 'CD'], [100, 'C'], [90, 'XC'],
    [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'],
    [5, 'V'], [4, 'IV'], [1, 'I']
]);
function intToRoman(num) {
    let roman = '';
    let nums = []
    while (num > 0) {
        const divisor = 10 ** (String(num).length - 1)
        nums.push(Math.floor(num / divisor) * divisor)
        roman += checkRomanLiteral(Math.floor(num / divisor) * divisor)
        num = num % divisor
    }
    return roman
};


function checkRomanLiteral(val) {
    let temp = ''
    for (const [key, value] of value_symbols.entries()) {
        temp += value.repeat(Math.floor(val / key));
        val = val % key;
    }
    return temp;
}

console.log(intToRoman(3)) // "III"
console.log(intToRoman(4)) // "IV"
console.log(intToRoman(9)) // "IX"
console.log(intToRoman(58)) // "LVIII"
console.log(intToRoman(1994)) // "MCMXCIV"



/**
 * Optimized solution
 */
function intToRoman(num) {
    const values[] = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4, 1
    ];

    const symbols[] = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV", "I"
    ];

    let result = "";

    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            result += symbols[i];
            num -= values[i];
        }
    }

    return result;
};