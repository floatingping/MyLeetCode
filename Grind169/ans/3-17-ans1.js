/*
Medium | 25 mins
3-17. Longest Palindromic Substring
LeetCode 5: https://leetcode.com/problems/longest-palindromic-substring/
Difficulty: Medium
Suggested time: 25 mins

Given a string s, return its longest palindromic substring.
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
	if (s.length < 2) {
		return s;
	}
	
	let start = 0;
	let maxLen = 1;
	
	const expandAroundCenter = (left, right) => {
		while (left >= 0 && right < s.length && s[left] === s[right]) {
			left--;
			right++;
		}
		return right - left - 1; // Length of palindrome
	};
	
	for (let i = 0; i < s.length; i++) {
		// Check for odd-length palindromes (center is a single character)
		const len1 = expandAroundCenter(i, i);
		// Check for even-length palindromes (center is between two characters)
		const len2 = expandAroundCenter(i, i + 1);
		
		const len = Math.max(len1, len2);
		
		if (len > maxLen) {
			maxLen = len;
			start = i - Math.floor((len - 1) / 2);
		}
	}
	
	return s.substring(start, start + maxLen);
};

console.log(longestPalindrome("babad")); // "bab" or "aba"
console.log(longestPalindrome("cbbd")); // "bb"

// node Grind169/ans/3-17-ans1.js
