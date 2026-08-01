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
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
	const m = grid.length;
	const n = grid[0].length;
	const queue = [];
	let freshOranges = 0;
	
	// Initialize queue with all rotten oranges and count fresh ones
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] === 2) {
				queue.push([i, j, 0]);
			} else if (grid[i][j] === 1) {
				freshOranges++;
			}
		}
	}
	
	const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
	let minutes = 0;
	
	// BFS
	for (let [x, y, time] of queue) {
		minutes = Math.max(minutes, time);
		
		for (const [dx, dy] of directions) {
			const nx = x + dx;
			const ny = y + dy;
			
			if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === 1) {
				grid[nx][ny] = 2;
				freshOranges--;
				queue.push([nx, ny, time + 1]);
			}
		}
	}
	
	return freshOranges === 0 ? minutes : -1;
};

console.log(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]])); // 4
console.log(orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]])); // -1
console.log(orangesRotting([[0, 2]])); // 0

// node Grind169/ans/3-2-ans1.js
