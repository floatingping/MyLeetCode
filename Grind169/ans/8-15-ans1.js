/*
Hard | 40 mins
51. N-Queens
使用回溯法求解N皇后问题
*/

var solveNQueens = function (n) {
	const result = [];
	const board = new Array(n).fill(0).map(() => new Array(n).fill('.'));

	const isValid = (row, col) => {
		// 检查列
		for (let i = 0; i < row; i++) {
			if (board[i][col] === 'Q') {
				return false;
			}
		}

		// 检查左上对角线
		for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
			if (board[i][j] === 'Q') {
				return false;
			}
		}

		// 检查右上对角线
		for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
			if (board[i][j] === 'Q') {
				return false;
			}
		}

		return true;
	};

	const backtrack = (row) => {
		if (row === n) {
			result.push(board.map(r => r.join('')));
			return;
		}

		for (let col = 0; col < n; col++) {
			if (isValid(row, col)) {
				board[row][col] = 'Q';
				backtrack(row + 1);
				board[row][col] = '.';
			}
		}
	};

	backtrack(0);
	return result;
};

console.log(solveNQueens(4));
console.log(solveNQueens(1)); // [["Q"]]

// node Grind169/ans/8-15-ans1.js
