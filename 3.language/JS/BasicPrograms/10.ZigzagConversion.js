function convert(s, numRows) {
    if (!Boolean(s) || s.length <= 1 || numRows === 1) return s
    let temp = new Map()
    Array.from({ length: numRows }, (_, i) => temp.set(i, ''))

    const cycleLength = 2 * (numRows - 1)
    for (let i = 0; i < s.length; i++) {
        const expectedPosition = i % cycleLength

        const key =
            expectedPosition < numRows
                ? expectedPosition
                : cycleLength - expectedPosition
        const value = temp.get(key) + s[i]
        temp.set(key, value)
    }

    console.log(temp.get(1))


    // temporary diversion
    return Array.from(temp.values()).join('');
};

console.log(convert("PAYPALISHIRING", 3)) // "PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4)) // "PINALSIGYAHRPI"
console.log(convert("A", 1)) // "A"