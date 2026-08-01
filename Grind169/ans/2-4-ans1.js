/*
Easy | 15 mins
268. Missing Number
https://leetcode.com/problems/missing-number/

nums contains n distinct numbers from the range [0, n]. Return the one number in that range that is missing.

Example 1:
Input: nums = [3,0,1]
Output: 2

Example 2:
Input: nums = [0,1]
Output: 2
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    // XOR approach: result will be the missing number
    let result = nums.length;
    for (let i = 0; i < nums.length; i++) {
        result ^= i ^ nums[i];
    }
    return result;
};

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2

// node Grind169/ans/2-4-ans1.js
