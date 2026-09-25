
const MIN_RANGE = -(2 ** 31)     // changed: was 2**31 - 1
const MAX_RANGE = 2 ** 31 - 1    // changed: was 2**31

function myAtoi(s) {
    let str = s;
    let num = 0;
    if (s.startsWith(' ')) str = str.trim() // removing trailing spaces from begining and end 
    if (str === '0' || isNaN(toNumber(str))) return 0              // changed: parseInt -> toNumber
    num = toNumber(str)                                            // changed: parseInt -> toNumber
    if (!checkNumAndItsBoundaryRange(num)) num = num > 0 ? MAX_RANGE : MIN_RANGE  // changed: clamp

    return num
};


function checkNumAndItsBoundaryRange(num) {    // changed: takes number
    return num <= MAX_RANGE && num >= MIN_RANGE
}

// added: replacement for parseInt
function toNumber(str) {
    let i = 0, sign = 1, num = 0
    if (str[i] === '-' || str[i] === '+') {
        if (str[i] === '-') sign = -1
        i++
    }
    if (!(str[i] >= '0' && str[i] <= '9')) return NaN   // no digit after sign -> NaN (like parseInt)
    while (i < str.length && str[i] >= '0' && str[i] <= '9') {
        num = num * 10 + (str.charCodeAt(i) - 48)      // '0' has char code 48
        i++
    }
    return sign * num || 0   // "|| 0" avoids returning -0
}




console.log(myAtoi("42")) // 42
console.log(myAtoi("   -42")) // -42
console.log(myAtoi("4193 with words")) // 4193
console.log(myAtoi("words and 987")) // 0
console.log(myAtoi("-91283472332")) // -2147483648
console.log(myAtoi("91283472332")) // 2147483647

