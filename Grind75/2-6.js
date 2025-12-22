/**
 * LeetCode Grind 75 - 2-6
 * Majority Element (Easy - 20 mins)
 * 
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * 
 * You may assume that the majority element always exists in the array.
 * 
 * Example 1:
 * Input: nums = [3,2,3]
 * Output: 3
 * 
 * Example 2:
 * Input: nums = [2,2,1,1,1,2,2]
 * Output: 2
 * 
 * Example 3:
 * Input: nums = [1]
 * Output: 1
 * 
 * Constraints:
 * - n == nums.length
 * - 1 <= n <= 5 * 10^4
 * - -10^9 <= nums[i] <= 10^9
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // TODO: 補充你的程式碼
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
