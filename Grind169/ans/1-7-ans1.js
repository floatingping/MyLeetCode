/*
Valid Anagram - Using Map
Time Complexity: O(n)
Space Complexity: O(1) (at most 26 lowercase letters)
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    const charCount = new Map();
    
    // Count characters in s
    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    // Subtract characters in t
    for (const char of t) {
        if (!charCount.has(char)) {
            return false;
        }
        charCount.set(char, charCount.get(char) - 1);
        if (charCount.get(char) < 0) {
            return false;
        }
    }
    
    return true;
};

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("a", "a")); // true

// node Grind169/ans/1-7-ans1.js
