/*
Medium | 30 mins
3-2. Rotting Oranges
LeetCode 994: https://leetcode.com/problems/rotting-oranges/
Difficulty: Medium
Suggested time: 30 mins

Given an m x n grid where 0 is an empty cell, 1 is a fresh orange, and 2 is
a rotten orange, return the minimum number of minutes until no fresh orange
remains. Every minute, each rotten orange rots its four-directionally adjacent
fresh oranges. Return -1 if this is impossible.

Example 1:
Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

Example 2:
Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1

Example 3:
Input: grid = [[0,2]]
Output: 0

Constraints:
- m == grid.length
- n == grid[i].length
- 1 <= m, n <= 10
- grid[i][j] is 0, 1, or 2.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {

};

console.log(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]])); // 4
console.log(orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]])); // -1
console.log(orangesRotting([[0, 2]])); // 0

// node Grind169/3-2.js
