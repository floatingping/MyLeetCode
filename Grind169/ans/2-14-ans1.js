/*
Medium | 30 mins
3. Longest Substring Without Repeating Characters
https://leetcode.com/problems/longest-substring-without-repeating-characters/

Given a string s, return the length of its longest substring containing no repeated characters.

Example 1:
Input: s = "abcabcbb"
Output: 3

Example 2:
Input: s = "bbbbb"
Output: 1
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const charMap = new Map();
    let maxLength = 0;
    let left = 0;
    
    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        
        if (charMap.has(char)) {
            left = Math.max(left, charMap.get(char) + 1);
        }
        
        charMap.set(char, right);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1

// node Grind169/ans/2-14-ans1.js
