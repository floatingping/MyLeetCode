/*
6-3. String to Integer (atoi)
https://leetcode.com/problems/string-to-integer-atoi/

Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:

1. Read in and ignore any leading whitespace.
2. Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines the sign of the final result. If neither is present, the result is positive.
3. Read in next the characters until the next non-digit character or the end of the string. The rest of the string is ignored.
4. Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the result is 0.
5. If the integer is out of the 32-bit signed integer range [-2^31, 2^31 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -2^31 should be clamped to -2^31, and integers greater than 2^31 - 1 should be clamped to 2^31 - 1.
6. Return the integer as the final result.

Example 1:

Input: s = "42"
Output: 42

Example 2:

Input: s = " -042"
Output: -42

Example 3:

Input: s = "1337c0d3"
Output: 1337

Constraints:

0 <= s.length <= 200
s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.
*/

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {};

console.log(myAtoi("42")); // 42
console.log(myAtoi(" -042")); // -42
console.log(myAtoi("1337c0d3")); // 1337
console.log(myAtoi("0-1")); // 0
console.log(myAtoi("-91283472332")); // -2147483648

// node Grind75/6-3.js
