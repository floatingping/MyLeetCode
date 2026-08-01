/*
Medium | 30 mins
74. Search a 2D Matrix
https://leetcode.com/problems/search-a-2d-matrix/
Difficulty: Medium | Suggested time: 30 mins

Given an m x n integer matrix satisfying the listed row-major ordering rules,
return true if target is in matrix, or false otherwise. Each row is sorted and
the first value of a row is greater than the last value of the previous row.

Example 1:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Example 2:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false

Constraints:
- m == matrix.length
- n == matrix[i].length
- 1 <= m, n <= 100
- -10^4 <= matrix[i][j], target <= 10^4
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {

};

const matrixExample = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
console.log(searchMatrix(matrixExample, 3)); // true
console.log(searchMatrix(matrixExample, 13)); // false

// node Grind169/6-11.js
