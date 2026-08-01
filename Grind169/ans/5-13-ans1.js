/*
Medium | 30 mins
LeetCode #424. Longest Repeating Character Replacement
https://leetcode.com/problems/longest-repeating-character-replacement/

You may choose any character in string s and replace it with any other uppercase English letter at most k times.
Return the length of the longest substring containing the same letter after those replacements.
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    const charCount = new Map();
    let maxLength = 0;
    let left = 0;
    let maxCharCount = 0;
    
    for (let right = 0; right < s.length; right++) {
        // Add current character to the window
        charCount.set(s[right], (charCount.get(s[right]) || 0) + 1);
        maxCharCount = Math.max(maxCharCount, charCount.get(s[right]));
        
        // If we need more than k replacements, shrink the window
        while (right - left + 1 - maxCharCount > k) {
            charCount.set(s[left], charCount.get(s[left]) - 1);
            left++;
        }
        
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
};

console.log(characterReplacement("ABAB", 2)); // 4
console.log(characterReplacement("AABABBA", 1)); // 4

// node Grind169/ans/5-13-ans1.js
