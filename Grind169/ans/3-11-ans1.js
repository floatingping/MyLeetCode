/*
Medium | 30 mins
3-11. Word Break
LeetCode 139: https://leetcode.com/problems/word-break/
Difficulty: Medium
Suggested time: 30 mins

Given a string s and an array of strings wordDict, return true if s can be
segmented into a space-separated sequence of one or more dictionary words. A
dictionary word may be reused multiple times.
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
	const wordSet = new Set(wordDict);
	const n = s.length;
	const dp = new Array(n + 1).fill(false);
	dp[0] = true; // Empty string can always be segmented
	
	for (let i = 1; i <= n; i++) {
		for (let j = 0; j < i; j++) {
			if (dp[j] && wordSet.has(s.substring(j, i))) {
				dp[i] = true;
				break;
			}
		}
	}
	
	return dp[n];
};

console.log(wordBreak("leetcode", ["leet", "code"])); // true
console.log(wordBreak("applepenapple", ["apple", "pen"])); // true
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // false

// node Grind169/ans/3-11-ans1.js
