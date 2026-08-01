/*
Easy | 20 mins
733. Flood Fill
https://leetcode.com/problems/flood-fill/

Given an image represented by an m x n integer grid, recolor the starting pixel and every connected pixel with the same original color. Cells connect horizontally or vertically.

Example 1:

Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: The connected region containing image[1][1] is recolored.

Example 2:

Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
Output: [[0,0,0],[0,0,0]]

Constraints:

m == image.length
n == image[i].length
1 <= m, n <= 50
0 <= image[i][j], color < 2^16
0 <= sr < m
0 <= sc < n
*/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {



};

console.log(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2)); // [[2, 2, 2], [2, 2, 0], [2, 0, 1]]
console.log(floodFill([[0, 0, 0], [0, 0, 0]], 0, 0, 0)); // [[0, 0, 0], [0, 0, 0]]
console.log(floodFill([[0]], 0, 0, 2)); // [[2]]


// node Grind169/1-9.js
