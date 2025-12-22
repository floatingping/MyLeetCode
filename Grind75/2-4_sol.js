/**
 * LeetCode Grind 75 - 2-4 Solution
 * Longest Palindrome (Easy - 20 mins)
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    // 計算每個字元的出現次數
    const charCount = {};
    
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    let length = 0;
    let hasOdd = false;
    
    // 計算能使用的字符
    for (const count of Object.values(charCount)) {
        // 使用偶數個字元
        length += Math.floor(count / 2) * 2;
        // 如果有奇數個字元，標記後面可以加一個中心字元
        if (count % 2 === 1) {
            hasOdd = true;
        }
    }
    
    // 如果有奇數個字元，可以在中心加一個
    return hasOdd ? length + 1 : length;
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
