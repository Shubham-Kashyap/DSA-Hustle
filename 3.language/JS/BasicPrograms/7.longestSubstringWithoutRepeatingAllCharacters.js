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
// execution time 57 subms
console.log(lengthOfLongestSubstring("abcabcbb")) // 3


// refactored approach
function lengthOfLongestSubstring(s) {
    let calculatedLength = 0;
    let temp = ""
    for (let i of s) {
        const locatedAt = temp.indexOf(i)
        if (locatedAt > -1) temp = temp.slice(locatedAt + 1)
        temp = temp.concat(i)
        if (calculatedLength < temp.length) calculatedLength = temp.length;
    }

    console.log(temp)
    // temporary diversion 
    return calculatedLength;
};

// execution time 48 subms


function lengthOfLongestSubstring(s) {
    let calculatedLength = 0;

    // Start of our current substring/window
    let left = 0;

    // Store: character -> last index where we saw it
    const map = new Map();

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];

        // If character already exists in the current window,
        // move left just after its previous occurrence.
        if (map.has(currentChar)) {
            left = Math.max(left, Number(map.get(currentChar)) + 1);
        }

        // Update the character's latest position
        map.set(currentChar, right);

        // Current window length
        const currentLength = right - left + 1;

        // Keep the maximum length
        if (calculatedLength < currentLength) {
            calculatedLength = currentLength;
        }
    }

    return calculatedLength;
}
// execution time 37 subms