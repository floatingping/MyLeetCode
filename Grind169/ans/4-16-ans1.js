/*
Medium | 30 mins
4-16. Pacific Atlantic Water Flow
417. Pacific Atlantic Water Flow
https://leetcode.com/problems/pacific-atlantic-water-flow/
*/

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
	const m = heights.length;
	const n = heights[0].length;
	
	const pacificReachable = Array.from({ length: m }, () => Array(n).fill(false));
	const atlanticReachable = Array.from({ length: m }, () => Array(n).fill(false));
	
	const dfs = (r, c, reachable, prevHeight) => {
		// Out of bounds or already visited
		if (r < 0 || r >= m || c < 0 || c >= n || reachable[r][c]) {
			return;
		}
		
		// Current height is lower than previous height, water cannot flow up
		if (heights[r][c] < prevHeight) {
			return;
		}
		
		reachable[r][c] = true;
		
		// Explore all four directions
		dfs(r + 1, c, reachable, heights[r][c]);
		dfs(r - 1, c, reachable, heights[r][c]);
		dfs(r, c + 1, reachable, heights[r][c]);
		dfs(r, c - 1, reachable, heights[r][c]);
	};
	
	// DFS from Pacific borders
	for (let r = 0; r < m; r++) {
		dfs(r, 0, pacificReachable, 0);
		dfs(r, n - 1, atlanticReachable, 0);
	}
	
	for (let c = 0; c < n; c++) {
		dfs(0, c, pacificReachable, 0);
		dfs(m - 1, c, atlanticReachable, 0);
	}
	
	// Find cells that can reach both oceans
	const result = [];
	for (let r = 0; r < m; r++) {
		for (let c = 0; c < n; c++) {
			if (pacificReachable[r][c] && atlanticReachable[r][c]) {
				result.push([r, c]);
			}
		}
	}
	
	return result;
};

console.log(pacificAtlantic([[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]])); // [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]]
console.log(pacificAtlantic([[1]])); // [[0, 0]]
console.log(pacificAtlantic([[1, 2], [4, 3]])); // [[0, 1], [1, 0], [1, 1]]

// node Grind169/ans/4-16-ans1.js
