/*
Medium | 25 mins
73. Set Matrix Zeroes
https://leetcode.com/problems/set-matrix-zeroes/
Difficulty: Medium | Suggested time: 25 mins

Given an m x n integer matrix, if an element is 0, set its entire row and
column to 0. Modify the matrix in place.

Example 1:
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

Constraints:
- m == matrix.length
- n == matrix[0].length
- 1 <= m, n <= 200
- -2^31 <= matrix[i][j] <= 2^31 - 1
*/

/**
 * @param {number[][]} matrix
 * @return {void}
 */
var setZeroes = function (matrix) {

};

const zeroMatrixExample = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
setZeroes(zeroMatrixExample);
console.log(zeroMatrixExample); // [[1, 0, 1], [0, 0, 0], [1, 0, 1]]

// node Grind169/6-16.js
