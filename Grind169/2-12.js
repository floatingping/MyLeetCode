/*
Medium | 30 mins
542. 01 Matrix
https://leetcode.com/problems/01-matrix/

Given an m x n binary matrix mat, return a matrix where each cell contains its distance to the nearest 0.

Example 1:
Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
Output: [[0,0,0],[0,1,0],[0,0,0]]

Example 2:
Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
Output: [[0,0,0],[0,1,0],[1,2,1]]

Constraints:
- m == mat.length
- n == mat[i].length
- 1 <= m, n <= 10^4
- 1 <= m * n <= 10^4
- mat[i][j] is either 0 or 1.
- There is at least one 0 in mat.
*/

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {

};

console.log(updateMatrix([[0, 0, 0], [0, 1, 0], [0, 0, 0]])); // [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
console.log(updateMatrix([[0, 0, 0], [0, 1, 0], [1, 1, 1]])); // [[0, 0, 0], [0, 1, 0], [1, 2, 1]]

// node Grind169/2-12.js
