function lengthOfLongestSubstring(s) {
    let calculatedLength = 0;
    let temp = ""
    for (let i of s) {

        if (temp.includes(i)) temp = temp.slice(temp.indexOf(i) + 1)
        temp = temp.concat(i)
        if (calculatedLength < temp.length) calculatedLength = temp.length;

    }

    console.log(temp)
    // temporary diversion 
    return calculatedLength;
};

console.log(lengthOfLongestSubstring("abcabcbb")) // 3