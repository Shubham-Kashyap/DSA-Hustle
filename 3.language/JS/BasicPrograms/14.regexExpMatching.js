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