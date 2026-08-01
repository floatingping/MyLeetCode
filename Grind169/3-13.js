/*
Medium | 25 mins
3-13. String to Integer (atoi)
LeetCode 8: https://leetcode.com/problems/string-to-integer-atoi/
Difficulty: Medium
Suggested time: 25 mins

Implement myAtoi(s), which converts a string to a 32-bit signed integer. Skip
leading whitespace, read an optional sign, then read digits until a non-digit
is found. Return 0 if no digits are read, and clamp results to [-2^31, 2^31 - 1].

Example 1:
Input: s = "42"
Output: 42

Example 2:
Input: s = "   -42"
Output: -42

Example 3:
Input: s = "4193 with words"
Output: 4193

Constraints:
- 0 <= s.length <= 200
- s consists of English letters, digits, spaces, "+", "-", and ".".
*/

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {

};

console.log(myAtoi("42")); // 42
console.log(myAtoi("   -42")); // -42
console.log(myAtoi("4193 with words")); // 4193

// node Grind169/3-13.js
