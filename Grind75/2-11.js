/**
 * LeetCode Grind 75 - 2-11
 * Contains Duplicate (Easy - 15 mins)
 * 
 * Given an integer array nums, return true if any value appears at least twice in the array, 
 * and return false if every element is distinct.
 * 
 * Example 1:
 * Input: nums = [1,2,3,1]
 * Output: true
 * 
 * Example 2:
 * Input: nums = [1,2,3,4]
 * Output: false
 * 
 * Example 3:
 * Input: nums = [99,99]
 * Output: true
 * 
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - -10^9 <= nums[i] <= 10^9
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // TODO: 補充你的程式碼
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
