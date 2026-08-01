/*
409. Longest Palindrome - Using Map
Time Complexity: O(n) where n is the length of string
Space Complexity: O(1) or O(52) - at most 26 lowercase + 26 uppercase
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    const charCount = new Map();
    
    // Count frequency of each character
    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    let palindromeLength = 0;
    let hasOddCount = false;
    
    // For each character, use even count and track if any odd exists
    for (const count of charCount.values()) {
        if (count % 2 === 0) {
            palindromeLength += count;
        } else {
            palindromeLength += count - 1;
            hasOddCount = true;
        }
    }
    
    // If we have odd counts, we can place one in the middle
    return hasOddCount ? palindromeLength + 1 : palindromeLength;
};

console.log(longestPalindrome("abccccdd")); // 7
console.log(longestPalindrome("a")); // 1
console.log(longestPalindrome("bb")); // 2

// node Grind169/ans/1-17-ans1.js
