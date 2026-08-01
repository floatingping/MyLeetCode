/*
Easy | 20 mins
977. Squares of a Sorted Array
https://leetcode.com/problems/squares-of-a-sorted-array/

Given a non-decreasing integer array nums, return an array of each value squared, also sorted in non-decreasing order.

Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]

Example 2:
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    const result = new Array(nums.length);
    let left = 0, right = nums.length - 1;
    
    // Iterate from right to left to fill result from right to left
    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            result[i] = nums[left] * nums[left];
            left++;
        } else {
            result[i] = nums[right] * nums[right];
            right--;
        }
    }
    
    return result;
};

console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0, 1, 9, 16, 100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); // [4, 9, 9, 49, 121]

// node Grind169/ans/2-9-ans1.js
