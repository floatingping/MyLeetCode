/*
8. Binary Search
https://leetcode.com/problems/binary-search/

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 13
Output: -1
Explanation: 13 does not exist in nums so return -1

Constraints:
1 <= nums.length <= 104
-109 <= nums[i] <= 109
nums is sorted in ascending order.
-109 <= target <= 109
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {


};

console.log(search([-1,0,3,5,9,12], 9)); // 4
console.log(search([-1,0,3,5,9,12], 13)); // -1
console.log(search([5], 5)); // 0
console.log(search([1,3], 3)); // 1

// node Grind75/1-8.js
