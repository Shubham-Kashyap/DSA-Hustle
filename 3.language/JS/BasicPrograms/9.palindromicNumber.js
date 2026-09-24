function isPalindrome(x) {
    if (String(x).startsWith('+') || String(x).startsWith('-')) return false;
    let str = String(x);
    let left = 0;
    let right = str.length;
    while (left <= right) {
        console.log(
            str, left, right
        )
        if (str[left] !== str[right]) return false
        left++
        right--

    }

    // temporary diverson
    return true;
};

console.log(isPalindrome(121)) // true
console.log(isPalindrome(-121)) // false
console.log(isPalindrome(10)) // false


/**
 * actully writing a program that check is a number is palindromic or not without converting it to string
 */
function isPalindromeWithoutString(x) {
    if (x < 0) return false;
    let temp = 0
    let num = x;
    while (num > 0) {
        temp = temp * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return x < 0 ? -temp === x : temp === x;
}

console.log(isPalindromeWithoutString(121)) // true
console.log(isPalindromeWithoutString(-121)) // false
console.log(isPalindromeWithoutString(10)) // false