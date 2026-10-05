const splChar = ['.', '*']

function isMatch(s, p) {

    const patternIncudesSplChar = isPatternIncludesSplChar(p)

    let matrix = Array.from(
        { length: p.length + 1 },
        () => Array(s.length + 1).fill(false)
    );

    // exact match
    if (!patternIncudesSplChar.isFound)
        return s === p;

    // empty pattern matches empty string
    matrix[0][0] = true;

    // pattern like a*, a*b*, a*b*c* can match empty string
    for (let patIndex = 2; patIndex <= p.length; patIndex++) {
        if (p[patIndex - 1] === '*') {
            matrix[patIndex][0] =
                matrix[patIndex - 2][0];
        }
    }

    for (let charIndex = 1; charIndex <= s.length; charIndex++) {

        for (let patIndex = 1; patIndex <= p.length; patIndex++) {

            // normal character OR '.'
            if (
                s[charIndex - 1] === p[patIndex - 1] ||
                p[patIndex - 1] === '.'
            ) {
                matrix[patIndex][charIndex] =
                    matrix[patIndex - 1][charIndex - 1];
            }

            // '*'
            else if (p[patIndex - 1] === '*') {

                // zero occurrences
                matrix[patIndex][charIndex] =
                    matrix[patIndex - 2][charIndex];

                // one or more occurrences
                if (
                    s[charIndex - 1] === p[patIndex - 2] ||
                    p[patIndex - 2] === '.'
                ) {
                    matrix[patIndex][charIndex] =
                        matrix[patIndex][charIndex] ||
                        matrix[patIndex][charIndex - 1];
                }
            }
        }
    }

    return matrix[p.length][s.length];
}


function isPatternIncludesSplChar(p) {

    let charIndex = 0;
    const foundAt = [];

    while (charIndex < p.length) {

        if (splChar.includes(p[charIndex]))
            foundAt.push(charIndex);

        charIndex++;
    }

    return {
        isFound: foundAt.length > 0,
        foundAt
    };
}


console.log(isMatch("aa", "a")) // false
console.log(isMatch("aa", "a*")) // true
console.log(isMatch("mississippi", "mis*is*p*.")) // false
console.log(isMatch("ab", ".*")) // true
console.log(isMatch("aab", "c*a*b")) // true
console.log(isMatch("aaa", "ab*a*c*a")) // true



// optimized version


function isMatch(s, p) {
    const matrix = Array.from({ length: s.length + 1 }, () => new Array(p.length + 1).fill(0));

    matrix[0][0] = true;

    // early mitigation of empty string and regular expression matching like s = "" and p = "a*"
    for (let j = 2; j < p.length + 1; j++) {
        if (p[j - 1] === '*') {
            matrix[0][j] = matrix[0][j - 2]; // mean check the pattern by completly eliminating "a*" if true then put true
        }
        // matrix[0][j] = matrix[0][j-2] 
    }


    // rest handeling
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < p.length; j++) {


            // exact match or any char "."
            if (s[i] === p[j] || p[j] === '.') {
                matrix[i + 1][j + 1] = matrix[i][j];
            }


            // we encountered * 
            if (p[j] === '*') {
                // Zero occurrences of X*
                matrix[i + 1][j + 1] = matrix[i + 1][j - 1];

                // One or more occurrences of X*
                if (p[j - 1] === s[i] || p[j - 1] === '.') {
                    matrix[i + 1][j + 1] =
                        matrix[i + 1][j + 1] || matrix[i][j + 1];
                }
            }
        }
    }
    return matrix[s.length][p.length]
}