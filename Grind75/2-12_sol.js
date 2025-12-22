/**
 * LeetCode Grind 75 - 2-12 Solution
 * Maximum Subarray (Easy)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // Kadane's Algorithm
    // 時間複雜度 O(n)，空間複雜度 O(1)
    
    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        // 決定是繼續前面的 subarray 還是重新開始
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        // 更新最大值
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    
    return maxSoFar;
};

// 測試案例 1
console.log("=== Test Case 1 ===");
console.log("Expected: 6, Got:", maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// 測試案例 2
console.log("\n=== Test Case 2 ===");
console.log("Expected: 23, Got:", maxSubArray([5, 4, -1, 7, 8]));

// 測試案例 3
console.log("\n=== Test Case 3 ===");
console.log("Expected: -1, Got:", maxSubArray([-2, -1]));
