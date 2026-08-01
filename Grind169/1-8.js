/*
Easy | 15 mins
704. Binary Search
https://leetcode.com/problems/binary-search/

Given a sorted array of distinct integers nums and an integer target, return the target's index. Return -1 if target is not present.

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: nums[4] is 9.

Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not occur in nums.

Constraints:

1 <= nums.length <= 10^4
-10^4 < nums[i], target < 10^4
All values in nums are unique and nums is sorted in ascending order.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {



};

console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // -1
console.log(search([5], 5)); // 0


// node Grind169/1-8.js
