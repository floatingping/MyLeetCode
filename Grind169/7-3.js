/*
153. Find Minimum in Rotated Sorted Array
https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

Suppose an array of length n sorted in ascending order is rotated between 1
and n times. Given the rotated array nums of unique elements, return its
minimum element. Your solution must run in O(log n) time.

Example 1:
Input: nums = [3,4,5,1,2]
Output: 1

Example 2:
Input: nums = [4,5,6,7,0,1,2]
Output: 0

Constraints:
- n == nums.length
- 1 <= n <= 5000
- -5000 <= nums[i] <= 5000
- All integers of nums are unique.
- nums is sorted and rotated between 1 and n times.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {

};

console.log(findMin([3, 4, 5, 1, 2])); // 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // 0

// node Grind169/7-3.js
