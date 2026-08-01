/*
Easy | 20 mins
283. Move Zeroes
https://leetcode.com/problems/move-zeroes/

Move all 0 values in nums to the end while keeping the order of non-zero values. Modify nums in place.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]

Constraints:
- 1 <= nums.length <= 10^4
- -2^31 <= nums[i] <= 2^31 - 1
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything; modify nums in-place instead.
 */
var moveZeroes = function (nums) {

};

const firstNumbers = [0, 1, 0, 3, 12];
moveZeroes(firstNumbers);
console.log(firstNumbers); // [1, 3, 12, 0, 0]
const secondNumbers = [0];
moveZeroes(secondNumbers);
console.log(secondNumbers); // [0]

// node Grind169/2-2.js
