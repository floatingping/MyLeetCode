/*
15. Ransom Note
https://leetcode.com/problems/ransom-note/

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "a", magazine = "a"
Output: true

Example 3:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 4:
Input: ransomNote = "aa", magazine = "aab"
Output: true

Constraints:
1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {};

console.log(canConstruct("a", "b")); // false
console.log(canConstruct("a", "a")); // true
console.log(canConstruct("aa", "ab")); // false
console.log(canConstruct("aa", "aab")); // true

// node Grind75/2-2.js
