/**
 * LeetCode Grind 75 - 2-11 Solution
 * Contains Duplicate (Easy - 15 mins)
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // 使用 Set 檢查是否存在重複元素
    const seen = new Set();
    
    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    
    return false;
};

// 測試案例 1
console.log("=== Test Case 1 ===");
console.log("Expected: true, Got:", containsDuplicate([1, 2, 3, 1]));

// 測試案例 2
console.log("\n=== Test Case 2 ===");
console.log("Expected: false, Got:", containsDuplicate([1, 2, 3, 4]));

// 測試案例 3
console.log("\n=== Test Case 3 ===");
console.log("Expected: true, Got:", containsDuplicate([99, 99]));
