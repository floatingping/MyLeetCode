/*
Hard | 35 mins
239. Sliding Window Maximum
https://leetcode.com/problems/sliding-window-maximum/

Given an integer array nums and a window size k, slide the window one position
at a time and return the maximum value in every window.

Examples:
nums = [1,3,-1,-3,5,3,6,7], k = 3 -> [3,3,5,5,6,7]
nums = [1], k = 1 -> [1]

Constraints:
- 1 <= nums.length <= 10^5
- -10^4 <= nums[i] <= 10^4
- 1 <= k <= nums.length
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {

};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3, 3, 5, 5, 6, 7]
console.log(maxSlidingWindow([1], 1)); // [1]

// node Grind169/8-10.js
