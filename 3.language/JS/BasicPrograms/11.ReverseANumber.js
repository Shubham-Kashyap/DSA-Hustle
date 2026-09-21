function reverse(x) {
    if (isOverSigned32Bit(x)) return 0
    let num = x < 0 ? Math.abs(x) : x
    let rev = 0
    while (0 < num) {
        const lastDigit = num % 10
        rev = rev * 10 + lastDigit
        num = Math.floor(num / 10)
    }

    // temporary diversion
    if (isOverSigned32Bit(rev)) return 0
    return x < 0 ? -rev : rev
};

function isOverSigned32Bit(num) {
    return num < -2147483648 || num > 2147483647;
}


console.log(reverse(123)) // 321
console.log(reverse(-123)) // -321
console.log(reverse(120)) // 21
console.log(reverse(0)) // 0
console.log(reverse(1534236469)) // 0