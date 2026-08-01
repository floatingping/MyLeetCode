/*
Medium | 30 mins
3-3. Search in Rotated Sorted Array
LeetCode 33: https://leetcode.com/problems/search-in-rotated-sorted-array/
Difficulty: Medium
Suggested time: 30 mins

An integer array nums was sorted in ascending order with distinct values, then
possibly rotated at an unknown pivot. Return the index of target if it exists
in nums; otherwise, return -1. Your algorithm must run in O(log n) time.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let left = 0;
	let right = nums.length - 1;
	
	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		
		if (nums[mid] === target) {
			return mid;
		}
		
		// Check which side is sorted
		if (nums[left] <= nums[mid]) {
			// Left side is sorted
			if (nums[left] <= target && target < nums[mid]) {
				// Target is in the sorted left side
				right = mid - 1;
			} else {
				// Target is in the right side
				left = mid + 1;
			}
		} else {
			// Right side is sorted
			if (nums[mid] < target && target <= nums[right]) {
				// Target is in the sorted right side
				left = mid + 1;
			} else {
				// Target is in the left side
				right = mid - 1;
			}
		}
	}
	
	return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(search([1], 0)); // -1

// node Grind169/ans/3-3-ans1.js
