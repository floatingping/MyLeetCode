/*
844. Backspace String Compare
https://leetcode.com/problems/backspace-string-compare/

Given strings s and t containing lowercase letters and '#', return true if they are equal after processing every '#' as a backspace.

Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both strings become "ac".

Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both strings become empty.

Example 3:

Input: s = "a#c", t = "b"
Output: false

Constraints:

1 <= s.length, t.length <= 200
s and t contain only lowercase English letters and '#'.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {



};

console.log(backspaceCompare("ab#c", "ad#c")); // true
console.log(backspaceCompare("ab##", "c#d#")); // true
console.log(backspaceCompare("a#c", "b")); // false


// node Grind169/1-27.js
