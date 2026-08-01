/*
Medium | 30 mins
221. Maximal Square
https://leetcode.com/problems/maximal-square/
Difficulty: Medium | Suggested time: 30 mins

Given an m x n binary matrix filled with "0" and "1", return the area of the
largest square containing only "1" cells.

Example 1:
Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 4

Example 2:
Input: matrix = [["0","1"],["1","0"]]
Output: 1

Constraints:
- 1 <= matrix.length, matrix[0].length <= 300
- matrix[i][j] is "0" or "1".
*/

/**
 * @param {string[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {

};

console.log(maximalSquare([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]])); // 4
console.log(maximalSquare([["0", "1"], ["1", "0"]])); // 1

// node Grind169/6-5.js
