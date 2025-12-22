/**
 * LeetCode Grind 75 - 2-7
 * Add Binary (Easy - 15 mins)
 * 
 * Given two binary strings a and b, return their sum as a binary string.
 * 
 * Example 1:
 * Input: a = "11", b = "1"
 * Output: "100"
 * 
 * Example 2:
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * 
 * Example 3:
 * Input: a = "0", b = "0"
 * Output: "0"
 * 
 * Constraints:
 * - 1 <= a.length, b.length <= 10^4
 * - a and b consist of '0' and '1' characters
 * - Each string does not contain leading zeros except for the zero itself
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // TODO: 補充你的程式碼
};

// 測試案例 1
console.log("=== Test Case 1 ===");
console.log('Expected: "100", Got:', '"' + addBinary("11", "1") + '"');

// 測試案例 2
console.log("\n=== Test Case 2 ===");
console.log('Expected: "10101", Got:', '"' + addBinary("1010", "1011") + '"');

// 測試案例 3
console.log("\n=== Test Case 3 ===");
console.log('Expected: "0", Got:', '"' + addBinary("0", "0") + '"');
