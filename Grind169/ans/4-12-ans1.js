/*
Medium | 35 mins
4-12. Valid Sudoku
36. Valid Sudoku
https://leetcode.com/problems/valid-sudoku/
*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
	const rows = new Map();
	const cols = new Map();
	const boxes = new Map();
	
	for (let r = 0; r < 9; r++) {
		for (let c = 0; c < 9; c++) {
			const cell = board[r][c];
			
			// Skip empty cells
			if (cell === '.') continue;
			
			// Check row
			const rowKey = `row-${r}`;
			if (!rows.has(rowKey)) rows.set(rowKey, new Set());
			if (rows.get(rowKey).has(cell)) return false;
			rows.get(rowKey).add(cell);
			
			// Check column
			const colKey = `col-${c}`;
			if (!cols.has(colKey)) cols.set(colKey, new Set());
			if (cols.get(colKey).has(cell)) return false;
			cols.get(colKey).add(cell);
			
			// Check 3x3 box
			const boxKey = `box-${Math.floor(r / 3)}-${Math.floor(c / 3)}`;
			if (!boxes.has(boxKey)) boxes.set(boxKey, new Set());
			if (boxes.get(boxKey).has(cell)) return false;
			boxes.get(boxKey).add(cell);
		}
	}
	
	return true;
};

console.log(isValidSudoku([["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]])); // true
console.log(isValidSudoku([["8", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]])); // false
console.log(isValidSudoku([[".", ".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", ".", "."]])); // true

// node Grind169/ans/4-12-ans1.js
