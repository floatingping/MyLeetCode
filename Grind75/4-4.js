/*
4-4. Product of Array Except Self
https://leetcode.com/problems/product-of-array-except-self/

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {

};

console.log(productExceptSelf([1, 2, 3, 4]));        // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3]));   // [0,0,9,0,0]
console.log(productExceptSelf([2, 3, 4, 5]));        // [60,40,30,24]

// node Grind75/4-4.js
