/*
383. Ransom Note - Using Map
Time Complexity: O(m + n) where m = ransomNote.length, n = magazine.length
Space Complexity: O(1) or O(26) - at most 26 lowercase letters
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const charCount = new Map();
    
    // Count characters in magazine
    for (const char of magazine) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    // Check if we can construct ransomNote
    for (const char of ransomNote) {
        if (!charCount.has(char) || charCount.get(char) === 0) {
            return false;
        }
        charCount.set(char, charCount.get(char) - 1);
    }
    
    return true;
};

console.log(canConstruct("a", "b")); // false
console.log(canConstruct("aa", "ab")); // false
console.log(canConstruct("aa", "aab")); // true

// node Grind169/ans/1-15-ans1.js
