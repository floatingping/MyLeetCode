/*
Medium | 20 mins
3-18. Unique Paths
LeetCode 62: https://leetcode.com/problems/unique-paths/
Difficulty: Medium
Suggested time: 20 mins

A robot starts in the top-left corner of an m x n grid and must reach the
bottom-right corner. It can move only down or right. Return the number of
possible unique paths.
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
	const dp = Array.from({ length: m }, () => Array(n).fill(1));
	
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
		}
	}
	
	return dp[m - 1][n - 1];
};

console.log(uniquePaths(3, 7)); // 28
console.log(uniquePaths(3, 2)); // 3

// node Grind169/ans/3-18-ans1.js
