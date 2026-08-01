/*
Medium | 25 mins
3-10. Sort Colors
LeetCode 75: https://leetcode.com/problems/sort-colors/
Difficulty: Medium
Suggested time: 25 mins

Given an array nums containing n objects colored red (0), white (1), or blue
(2), sort it in-place so objects of the same color are adjacent in the order
red, white, and blue. Do not use the library sort function.
*/

/**
 * @param {number[]} nums
 * @return {void}
 */
var sortColors = function (nums) {
	let p0 = 0;    // Pointer for 0s
	let p2 = nums.length - 1;  // Pointer for 2s
	let curr = 0;  // Current pointer
	
	while (curr <= p2) {
		if (nums[curr] === 0) {
			// Swap with p0
			[nums[curr], nums[p0]] = [nums[p0], nums[curr]];
			p0++;
			curr++;
		} else if (nums[curr] === 2) {
			// Swap with p2
			[nums[curr], nums[p2]] = [nums[p2], nums[curr]];
			p2--;
		} else {
			// It's 1, just move forward
			curr++;
		}
	}
};

const colorsOne = [2, 0, 2, 1, 1, 0];
sortColors(colorsOne);
console.log(colorsOne); // [0, 0, 1, 1, 2, 2]
const colorsTwo = [2, 0, 1];
sortColors(colorsTwo);
console.log(colorsTwo); // [0, 1, 2]

// node Grind169/ans/3-10-ans1.js
