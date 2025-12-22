/**
 * LeetCode Grind 75 - 2-4
 * Longest Palindrome (Easy - 20 mins)
 * 
 * Given a string s containing uppercase and lowercase English characters and digits,
 * return the length of the longest palindrome that can be built with those characters.
 * 
 * In building a palindrome any characters can be used multiple times.
 * 
 * Example 1:
 * Input: s = "abccccdd"
 * Output: 7
 * Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
 * 
 * Example 2:
 * Input: s = "a"
 * Output: 1
 * 
 * Example 3:
 * Input: s = "ac"
 * Output: 1
 * 
 * Constraints:
 * - 1 <= s.length <= 2000
 * - s consists of lowercase and/or uppercase English letters and digits
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    // TODO: 補充你的程式碼
};

// 測試案例 1
console.log("=== Test Case 1 ===");
console.log("Expected: 7, Got:", longestPalindrome("abccccdd"));

// 測試案例 2
console.log("\n=== Test Case 2 ===");
console.log("Expected: 1, Got:", longestPalindrome("a"));

// 測試案例 3
console.log("\n=== Test Case 3 ===");
console.log("Expected: 1, Got:", longestPalindrome("ac"));
