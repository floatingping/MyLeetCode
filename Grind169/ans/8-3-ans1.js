/*
Hard | 40 mins
329. Longest Increasing Path in a Matrix
DFS + Memoization
*/

var longestIncreasingPath = function (matrix) {
	const memo = new Map();

	const dfs = (i, j, prevVal) => {
		// 边界检查
		if (i < 0 || i >= matrix.length || j < 0 || j >= matrix[0].length) {
			return 0;
		}

		const currVal = matrix[i][j];

		// 必须严格递增
		if (currVal <= prevVal) {
			return 0;
		}

		const key = `${i},${j}`;
		if (memo.has(key)) {
			return memo.get(key);
		}

		// 向上下左右四个方向探索
		const up = dfs(i - 1, j, currVal);
		const down = dfs(i + 1, j, currVal);
		const left = dfs(i, j - 1, currVal);
		const right = dfs(i, j + 1, currVal);

		const result = 1 + Math.max(up, down, left, right);
		memo.set(key, result);
		return result;
	};

	let max = 0;
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			max = Math.max(max, dfs(i, j, -Infinity));
		}
	}

	return max;
};

console.log(longestIncreasingPath([[9, 9, 4], [6, 6, 8], [2, 1, 1]])); // 4
console.log(longestIncreasingPath([[3, 4, 5], [3, 2, 6], [2, 2, 1]])); // 4

// node Grind169/ans/8-3-ans1.js
