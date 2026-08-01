/*
Easy | 15 mins
383. Ransom Note
https://leetcode.com/problems/ransom-note/

Return true if ransomNote can be constructed by using each character from magazine at most once; otherwise, return false.

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Explanation: The magazine does not contain 'a'.

Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Explanation: Only one 'a' is available.

Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true

Constraints:

1 <= ransomNote.length, magazine.length <= 10^5
ransomNote and magazine consist of lowercase English letters.
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {



};

console.log(canConstruct("a", "b")); // false
console.log(canConstruct("aa", "ab")); // false
console.log(canConstruct("aa", "aab")); // true


// node Grind169/1-15.js
