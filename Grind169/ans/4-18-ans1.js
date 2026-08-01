/*
Medium | 30 mins
4-18. Shortest Path to Get Food
1730. Shortest Path to Get Food
https://leetcode.com/problems/shortest-path-to-get-food/
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var getFood = function (grid) {
	const m = grid.length;
	const n = grid[0].length;
	
	// Find starting position
	let startR = -1;
	let startC = -1;
	for (let r = 0; r < m; r++) {
		for (let c = 0; c < n; c++) {
			if (grid[r][c] === '*') {
				startR = r;
				startC = c;
				break;
			}
		}
		if (startR !== -1) break;
	}
	
	// BFS to find shortest path
	const queue = [[startR, startC, 0]]; // [row, col, distance]
	const visited = Array.from({ length: m }, () => Array(n).fill(false));
	visited[startR][startC] = true;
	
	const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
	
	while (queue.length > 0) {
		const [r, c, dist] = queue.shift();
		
		// Check all four directions
		for (const [dr, dc] of directions) {
			const nr = r + dr;
			const nc = c + dc;
			
			// Check bounds
			if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;
			
			// Check if already visited or obstacle
			if (visited[nr][nc] || grid[nr][nc] === 'X') continue;
			
			// Found food
			if (grid[nr][nc] === '#') {
				return dist + 1;
			}
			
			visited[nr][nc] = true;
			queue.push([nr, nc, dist + 1]);
		}
	}
	
	return -1;
};

console.log(getFood([["X", "X", "X", "X", "X", "X"], ["X", "*", "O", "O", "O", "X"], ["X", "O", "O", "#", "O", "X"], ["X", "X", "X", "X", "X", "X"]])); // 3
console.log(getFood([["X", "X", "X", "X", "X"], ["X", "*", "X", "O", "X"], ["X", "O", "X", "#", "X"], ["X", "X", "X", "X", "X"]])); // -1
console.log(getFood([["X", "X", "X", "X"], ["X", "*", "O", "#"], ["X", "X", "X", "X"]])); // 2

// node Grind169/ans/4-18-ans1.js
