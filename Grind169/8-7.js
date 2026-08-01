/*
Hard | 40 mins
212. Word Search II
https://leetcode.com/problems/word-search-ii/

Find every requested word that can be formed by consecutively adjacent cells in
a board. A cell may not be used more than once in the same word.

Example:
board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]
words = ["oath","pea","eat","rain"] -> ["oath","eat"]

Constraints:
- 1 <= board.length, board[i].length <= 12
- 1 <= words.length <= 3 * 10^4
- 1 <= words[i].length <= 10
*/

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {

};

console.log(findWords(
	[["o", "a", "a", "n"], ["e", "t", "a", "e"], ["i", "h", "k", "r"], ["i", "f", "l", "v"]],
	["oath", "pea", "eat", "rain"]
)); // ["oath", "eat"]

// node Grind169/8-7.js
