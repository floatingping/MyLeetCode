/*
8-2. Minimum Window Substring
https://leetcode.com/problems/minimum-window-substring/

Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such window, return the empty string "".

The testcases will be generated such that the answer is unique.

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "ADOBEC"

Example 2:

Input: s = "a", t = "a"
Output: "a"

Example 3:

Input: s = "a", t = "aa"
Output: ""

Constraints:

m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of English letters.

Follow up: Could you find an algorithm that runs in O(m + n) time?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {

};

console.log(minWindow("ADOBECODEBANC", "ABC"));    // "ADOBEC"
console.log(minWindow("a", "a"));                   // "a"
console.log(minWindow("a", "aa"));                  // ""

// node Grind75/8-2.js
