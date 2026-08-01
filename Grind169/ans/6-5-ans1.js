/*
Medium | 30 mins
221. Maximal Square
https://leetcode.com/problems/maximal-square/

Given an m x n binary matrix, return the area of the largest square.

Strategy: Dynamic Programming
- dp[i][j] represents the side length of largest square with (i,j) as bottom-right
- If matrix[i][j] == '1', then dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
- Otherwise dp[i][j] = 0
- Track maximum side length and calculate area
*/

/**
 * @param {string[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    if (!matrix || matrix.length === 0) {
        return 0;
    }
    
    const m = matrix.length;
    const n = matrix[0].length;
    const dp = Array.from({ length: m }, () => Array(n).fill(0));
    let maxSide = 0;
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '1') {
                if (i === 0 || j === 0) {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                }
                maxSide = Math.max(maxSide, dp[i][j]);
            }
        }
    }
    
    return maxSide * maxSide;
};

console.log(maximalSquare([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]])); // 4
console.log(maximalSquare([["0", "1"], ["1", "0"]])); // 1

// node Grind169/ans/6-5-ans1.js
