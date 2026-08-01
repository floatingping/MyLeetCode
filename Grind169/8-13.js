/*
Hard | 40 mins
37. Sudoku Solver
https://leetcode.com/problems/sudoku-solver/

Fill the empty cells of a 9 x 9 Sudoku board. A solution is guaranteed; modify
the board in place rather than returning a value.

Example:
board = [["5","3",".",".","7",".",".",".","."], ...] -> solved board

Constraints:
- board.length == 9 and board[i].length == 9
- board[i][j] is a digit or '.'.
- The input board has exactly one solution.
*/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {

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
console.log(board); // [["5", "3", "4", "6", "7", "8", "9", "1", "2"], ...]

// node Grind169/8-13.js
