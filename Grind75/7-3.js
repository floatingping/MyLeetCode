/*
https://leetcode.com/problems/word-search/description/

79. Word Search

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

Example 1:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
Example 2:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
Example 3:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
 

Constraints:

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.
*/


/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }

    return false;

    function dfs(r, c, wordIdx) {
        if (wordIdx === word.length) return true;

        if (r < 0 || c < 0 || r >= board.length || c >= board[0].length) return false;

        if (board[r][c] !== word[wordIdx]) return false;

        const originChar = board[r][c];

        board[r][c] = "#";

        const result = dfs(r - 1, c, wordIdx + 1)
            || dfs(r, c + 1, wordIdx + 1)
            || dfs(r + 1, c, wordIdx + 1)
            || dfs(r, c - 1, wordIdx + 1);

        board[r][c] = originChar;

        return result;
    }
};



console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED")); // true
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "SEE"));
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCB")); // false
console.log(exist([["a"]], "a")); // true
console.log(exist([["a", "a"]], "aa")); // true
console.log(exist([["a", "a"]], "aaa")); // false




