/*
Hard | 40 mins
37. Sudoku Solver
使用回溯法求解数独
*/

var solveSudoku = function (board) {
	// 使用数组而不是Set的映射
	const rows = Array(9).fill(0).map(() => new Set());
	const cols = Array(9).fill(0).map(() => new Set());
	const boxes = Array(9).fill(0).map(() => new Set());

	// 初始化已填充的数字
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (board[i][j] !== '.') {
				const digit = board[i][j];
				rows[i].add(digit);
				cols[j].add(digit);
				const boxIdx = Math.floor(i / 3) * 3 + Math.floor(j / 3);
				boxes[boxIdx].add(digit);
			}
		}
	}

	const solve = () => {
		for (let i = 0; i < 9; i++) {
			for (let j = 0; j < 9; j++) {
				if (board[i][j] === '.') {
					for (let digit = 1; digit <= 9; digit++) {
						const digitStr = digit.toString();
						const boxIdx = Math.floor(i / 3) * 3 + Math.floor(j / 3);

						if (!rows[i].has(digitStr) && !cols[j].has(digitStr) && !boxes[boxIdx].has(digitStr)) {
							board[i][j] = digitStr;
							rows[i].add(digitStr);
							cols[j].add(digitStr);
							boxes[boxIdx].add(digitStr);

							if (solve()) {
								return true;
							}

							board[i][j] = '.';
							rows[i].delete(digitStr);
							cols[j].delete(digitStr);
							boxes[boxIdx].delete(digitStr);
						}
					}
					return false;
				}
			}
		}
		return true;
	};

	solve();
};

const board = [
	["5", "3", ".", ".", "7", ".", ".", ".", "."],
	["6", ".", ".", "1", "9", "5", ".", ".", "."],
	[".", "9", "8", ".", ".", ".", ".", "6", "."],
	["8", ".", ".", ".", "6", ".", ".", ".", "3"],
	["4", ".", ".", "8", ".", "3", ".", ".", "1"],
	["7", ".", ".", ".", "2", ".", ".", ".", "6"],
	[".", "6", ".", ".", ".", ".", "2", "8", "."],
	[".", ".", ".", "4", "1", "9", ".", ".", "5"],
	[".", ".", ".", ".", "8", ".", ".", "7", "9"]
];
solveSudoku(board);
console.log(board);

// node Grind169/ans/8-13-ans1.js
