/*
Medium | 30 mins
LeetCode #394. Decode String
https://leetcode.com/problems/decode-string/

Given an encoded string, return its decoded string. The encoding rule is k[encoded_string], where the string inside the brackets repeats exactly k times. Input is valid and digits appear only as repeat counts.

Example 1:
Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Example 2:
Input: s = "3[a2[c]]"
Output: "accaccacc"

Example 3:
Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"

Constraints:
- 1 <= s.length <= 30
- s consists of lowercase English letters, digits, and square brackets.
- s is guaranteed to be a valid input.
- All integers in s are in the range [1, 300].
*/

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {

};

console.log(decodeString("3[a]2[bc]")); // "aaabcbc"
console.log(decodeString("3[a2[c]]")); // "accaccacc"
console.log(decodeString("2[abc]3[cd]ef")); // "abcabccdcdcdef"

// node Grind169/5-9.js
