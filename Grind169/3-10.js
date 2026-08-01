/*
Medium | 25 mins
3-10. Sort Colors
LeetCode 75: https://leetcode.com/problems/sort-colors/
Difficulty: Medium
Suggested time: 25 mins

Given an array nums containing n objects colored red (0), white (1), or blue
(2), sort it in-place so objects of the same color are adjacent in the order
red, white, and blue. Do not use the library sort function.

Example 1:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Example 2:
Input: nums = [2,0,1]
Output: [0,1,2]

Constraints:
- 1 <= nums.length <= 300
- nums[i] is 0, 1, or 2.
*/

/**
 * @param {number[]} nums
 * @return {void}
 */
var sortColors = function (nums) {

};

const colorsOne = [2, 0, 2, 1, 1, 0];
sortColors(colorsOne);
console.log(colorsOne); // [0, 0, 1, 1, 2, 2]
const colorsTwo = [2, 0, 1];
sortColors(colorsTwo);
console.log(colorsTwo); // [0, 1, 2]

// node Grind169/3-10.js
