/*
Easy | 20 mins
20. Valid Parentheses
https://leetcode.com/problems/valid-parentheses/

Given a string s containing only '(', ')', '{', '}', '[' and ']', determine whether it is valid.

A string is valid when every opening bracket is closed by the same type of bracket in the correct order.

Example 1:

Input: s = "()"
Output: true
Explanation: The opening parenthesis is closed correctly.

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false
Explanation: A parenthesis cannot be closed by a bracket.

Constraints:

1 <= s.length <= 10^4
s contains only parentheses, brackets, and braces.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {



};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false


// node Grind169/1-2.js
