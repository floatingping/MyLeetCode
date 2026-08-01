/*
Hard | 40 mins
336. Palindrome Pairs
https://leetcode.com/problems/palindrome-pairs/

Given an array of unique words, return all index pairs [i, j] where i != j and
the concatenation words[i] + words[j] is a palindrome.

Examples:
words = ["abcd","dcba","lls","s","sssll"] -> [[0,1],[1,0],[3,2],[2,4]]
words = ["bat","tab","cat"] -> [[0,1],[1,0]]

Constraints:
- 1 <= words.length <= 5000
- 0 <= words[i].length <= 300
- words[i] contains lowercase English letters and all words are unique.
*/

/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {

};

console.log(palindromePairs(["abcd", "dcba", "lls", "s", "sssll"])); // [[0, 1], [1, 0], [3, 2], [2, 4]]
console.log(palindromePairs(["bat", "tab", "cat"])); // [[0, 1], [1, 0]]

// node Grind169/8-11.js
