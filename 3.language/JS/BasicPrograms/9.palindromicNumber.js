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