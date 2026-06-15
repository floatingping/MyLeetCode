/*
5-1. Search in Rotated Sorted Array
https://leetcode.com/problems/search-in-rotated-sorted-array/

There is an integer array nums sorted in ascending order (with distinct values) that is possibly rotated at an unknown pivot. 

You are given the possibly rotated array nums and an integer target, and you must find the index of target if it is in nums, or return -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Example 3:

Input: nums = [1], target = 1
Output: 0

Constraints:

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-104 <= target <= 104
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {

};

console.log(search([4,5,6,7,0,1,2], 0));    // 4
console.log(search([4,5,6,7,0,1,2], 3));    // -1
console.log(search([1], 1));                 // 0
console.log(search([3,1], 3));               // 0

// node Grind75/5-1.js
