function longestPalindrome(s) {
    let left = 0;
    let right = 0;
    let longest = ''
    for (let i = 0; i < s.length; i++) {
        // for odd length substring where element resides at center
        const oddlyPalindromeStr = checkIfSubstringIsPalindrome(s, i, i)
        // for evenly substring where no element resides at center
        const evenlyPalindromeStr = checkIfSubstringIsPalindrome(s, i, i + 1)
        if (longest.length < oddlyPalindromeStr.length) longest = oddlyPalindromeStr
        if (longest.length < evenlyPalindromeStr.length) longest = evenlyPalindromeStr
    }

    // temporary diversion
    return longest
};


function checkIfSubstringIsPalindrome(str, left, right) {
    let temp = '';
    while (left >= 0 && right < str.length && str[left] === str[right]) {
        temp = str.slice(left, right + 1)
        left--;
        right++;
    }
    return temp;
}


console.log(longestPalindrome("babad")) // "bab" or "aba"
console.log(longestPalindrome("cbbd")) // "bb"