/*
6-1. Word Break
https://leetcode.com/problems/word-break/

Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true

Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true

Example 3:

Input: s = "catsandsandcatsandcatsanddog", wordDict = ["cat","cats","and","sand","dog"]
Output: false

Constraints:

1 <= s.length <= 300
1 <= wordDict.length <= 1000
1 <= wordDict[i].length <= 20
s and wordDict[i] consist of only lowercase English letters.
All the strings of wordDict are unique.
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {

};

console.log(wordBreak("leetcode", ["leet","code"]));                         // true
console.log(wordBreak("applepenapple", ["apple","pen"]));                    // true
console.log(wordBreak("catsandsandcatsandcatsanddog", ["cat","cats","and","sand","dog"]));  // false
console.log(wordBreak("ab", ["a"]));                                         // false

// node Grind75/6-1.js
