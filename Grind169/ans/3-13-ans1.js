/*
Medium | 25 mins
3-13. String to Integer (atoi)
LeetCode 8: https://leetcode.com/problems/string-to-integer-atoi/
Difficulty: Medium
Suggested time: 25 mins

Implement myAtoi(s), which converts a string to a 32-bit signed integer. Skip
leading whitespace, read an optional sign, then read digits until a non-digit
is found. Return 0 if no digits are read, and clamp results to [-2^31, 2^31 - 1].
*/

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
	const INT_MIN = -2147483648;
	const INT_MAX = 2147483647;
	
	let i = 0;
	
	// Skip leading whitespace
	while (i < s.length && s[i] === ' ') {
		i++;
	}
	
	if (i === s.length) {
		return 0;
	}
	
	// Check for sign
	let sign = 1;
	if (s[i] === '+' || s[i] === '-') {
		sign = s[i] === '+' ? 1 : -1;
		i++;
	}
	
	// Read digits
	let result = 0;
	while (i < s.length && s[i] >= '0' && s[i] <= '9') {
		result = result * 10 + (s[i].charCodeAt(0) - '0'.charCodeAt(0));
		
		// Check for overflow
		if (result > INT_MAX) {
			return sign === 1 ? INT_MAX : INT_MIN;
		}
		
		i++;
	}
	
	return sign * result;
};

console.log(myAtoi("42")); // 42
console.log(myAtoi("   -42")); // -42
console.log(myAtoi("4193 with words")); // 4193

// node Grind169/ans/3-13-ans1.js
