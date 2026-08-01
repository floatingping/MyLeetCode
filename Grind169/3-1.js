/*
Medium | 25 mins
3-1. Number of Islands
LeetCode 200: https://leetcode.com/problems/number-of-islands/
Difficulty: Medium
Suggested time: 25 mins

Given an m x n 2D binary grid where "1" represents land and "0" represents
water, return the number of islands. An island is formed by horizontally or
vertically adjacent land cells and is surrounded by water.

Example 1:
Input: grid = [
	["1", "1", "1", "1", "0"],
	["1", "1", "0", "1", "0"],
	["1", "1", "0", "0", "0"],
	["0", "0", "0", "0", "0"]
]
Output: 1

Example 2:
Input: grid = [
	["1", "1", "0", "0", "0"],
	["1", "1", "0", "0", "0"],
	["0", "0", "1", "0", "0"],
	["0", "0", "0", "1", "1"]
]
Output: 3

Constraints:
- m == grid.length
- n == grid[i].length
- 1 <= m, n <= 300
- grid[i][j] is "0" or "1".
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {

};

console.log(numIslands([
	["1", "1", "1", "1", "0"],
	["1", "1", "0", "1", "0"],
	["1", "1", "0", "0", "0"],
	["0", "0", "0", "0", "0"]
])); // 1
console.log(numIslands([
	["1", "1", "0", "0", "0"],
	["1", "1", "0", "0", "0"],
	["0", "0", "1", "0", "0"],
	["0", "0", "0", "1", "1"]
])); // 3

// node Grind169/3-1.js
