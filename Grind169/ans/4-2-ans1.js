/*
Medium | 30 mins
4-2. Word Search
79. Word Search
https://leetcode.com/problems/word-search/
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
	const m = board.length;
	const n = board[0].length;
	const visited = Array.from({ length: m }, () => Array(n).fill(false));
	
	const dfs = (r, c, index) => {
		if (index === word.length) {
			return true;
		}
		
		if (r < 0 || r >= m || c < 0 || c >= n || visited[r][c] || board[r][c] !== word[index]) {
			return false;
		}
		
		visited[r][c] = true;
		
		const found = dfs(r + 1, c, index + 1) ||
					  dfs(r - 1, c, index + 1) ||
					  dfs(r, c + 1, index + 1) ||
					  dfs(r, c - 1, index + 1);
		
		visited[r][c] = false;
		return found;
	};
	
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (dfs(i, j, 0)) {
				return true;
			}
		}
	}
	
	return false;
};

console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED")); // true
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "SEE")); // true
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCB")); // false

// node Grind169/ans/4-2-ans1.js
