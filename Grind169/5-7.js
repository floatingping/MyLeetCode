/*
Medium | 25 mins
LeetCode #189. Rotate Array
https://leetcode.com/problems/rotate-array/

Given an integer array nums, rotate the array to the right by k steps, where k is non-negative. Modify nums in place.

Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]

Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]

Constraints:
- 1 <= nums.length <= 10^5
- -2^31 <= nums[i] <= 2^31 - 1
- 0 <= k <= 10^5
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything; modify nums in-place instead.
 */
var rotate = function (nums, k) {

};

const firstRotation = [1, 2, 3, 4, 5, 6, 7];
rotate(firstRotation, 3);
console.log(firstRotation); // [5, 6, 7, 1, 2, 3, 4]
const secondRotation = [-1, -100, 3, 99];
rotate(secondRotation, 2);
console.log(secondRotation); // [3, 99, -1, -100]

// node Grind169/5-7.js
