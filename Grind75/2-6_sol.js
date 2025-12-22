/**
 * LeetCode Grind 75 - 2-6 Solution
 * Majority Element (Easy - 20 mins)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // Boyer-Moore Voting Algorithm
    // 時間複雜度 O(n)，空間複雜度 O(1)
    
    let candidate = null;
    let count = 0;
    
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    
    return candidate;
};

// 測試案例 1
console.log("=== Test Case 1 ===");
console.log("Expected: 3, Got:", majorityElement([3, 2, 3]));

// 測試案例 2
console.log("\n=== Test Case 2 ===");
console.log("Expected: 2, Got:", majorityElement([2, 2, 1, 1, 1, 2, 2]));

// 測試案例 3
console.log("\n=== Test Case 3 ===");
console.log("Expected: 1, Got:", majorityElement([1]));
