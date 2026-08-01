/*
Medium | 25 mins
3-1. Number of Islands
LeetCode 200: https://leetcode.com/problems/number-of-islands/
Difficulty: Medium
Suggested time: 25 mins

Given an m x n 2D binary grid where "1" represents land and "0" represents
water, return the number of islands. An island is formed by horizontally or
vertically adjacent land cells and is surrounded by water.
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
	if (!grid || grid.length === 0) return 0;
	
	const m = grid.length;
	const n = grid[0].length;
	let count = 0;
	
	const dfs = (i, j) => {
		if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === "0") {
			return;
		}
		grid[i][j] = "0"; // Mark as visited
		dfs(i + 1, j);
		dfs(i - 1, j);
		dfs(i, j + 1);
		dfs(i, j - 1);
	};
	
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] === "1") {
				count++;
				dfs(i, j);
			}
		}
	}
	
	return count;
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

// node Grind169/ans/3-1-ans1.js
