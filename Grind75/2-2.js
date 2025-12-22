/**
 * LeetCode Grind 75 - 2-2
 * Ransom Note (Easy - 15 mins)
 * 
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed 
 * by using the letters from magazine and false otherwise.
 * Each letter in magazine can only be used once in ransomNote.
 * 
 * Example 1:
 * Input: ransomNote = "a", magazine = "b"
 * Output: false
 * 
 * Example 2:
 * Input: ransomNote = "aa", magazine = "ab"
 * Output: false
 * 
 * Example 3:
 * Input: ransomNote = "aa", magazine = "aab"
 * Output: true
 * 
 * Constraints:
 * - 1 <= ransomNote.length, magazine.length <= 10^5
 * - ransomNote and magazine consist of lowercase English letters
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // TODO: 補充你的程式碼
};

// 測試案例 1
console.log("=== Test Case 1 ===");
console.log("Expected: false, Got:", canConstruct("a", "b"));

// 測試案例 2
console.log("\n=== Test Case 2 ===");
console.log("Expected: false, Got:", canConstruct("aa", "ab"));

// 測試案例 3
console.log("\n=== Test Case 3 ===");
console.log("Expected: true, Got:", canConstruct("aa", "aab"));
