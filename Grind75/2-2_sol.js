/**
 * LeetCode Grind 75 - 2-2 Solution
 * Ransom Note (Easy - 15 mins)
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // 方法1：使用 Character Count Map
    const charCount = {};
    
    // 計算 magazine 中每個字元的數量
    for (const char of magazine) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // 檢查 ransomNote 是否可以構建
    for (const char of ransomNote) {
        if (!charCount[char] || charCount[char] === 0) {
            return false;
        }
        charCount[char]--;
    }
    
    return true;
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
