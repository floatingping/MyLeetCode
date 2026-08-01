/*
Medium | 30 mins
3-3. Search in Rotated Sorted Array
LeetCode 33: https://leetcode.com/problems/search-in-rotated-sorted-array/
Difficulty: Medium
Suggested time: 30 mins

An integer array nums was sorted in ascending order with distinct values, then
possibly rotated at an unknown pivot. Return the index of target if it exists
in nums; otherwise, return -1. Your algorithm must run in O(log n) time.

Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Example 3:
Input: nums = [1], target = 0
Output: -1

Constraints:
- 1 <= nums.length <= 5000
- -10^4 <= nums[i], target <= 10^4
- All values of nums are unique.
- nums is sorted and possibly rotated.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {

};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(search([1], 0)); // -1

// node Grind169/3-3.js
