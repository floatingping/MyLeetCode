/*
Medium | 20 mins
53. Maximum Subarray
https://leetcode.com/problems/maximum-subarray/

Given an integer array nums, find the contiguous subarray with the largest sum and return that sum.

Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6

Example 2:
Input: nums = [1]
Output: 1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let maxCurrent = nums[0];
    let maxGlobal = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
        if (maxCurrent > maxGlobal) {
            maxGlobal = maxCurrent;
        }
    }
    
    return maxGlobal;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([1])); // 1

// node Grind169/ans/2-10-ans1.js
