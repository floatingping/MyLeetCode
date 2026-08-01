/*
Medium | 35 mins
3-20. Container With Most Water
LeetCode 11: https://leetcode.com/problems/container-with-most-water/
Difficulty: Medium
Suggested time: 35 mins

Given n non-negative integers height where each value represents a vertical
line at its index, choose two lines that, with the x-axis, form a container
holding the most water. Return its maximum area. You may not slant the
container.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	let maxArea = 0;
	let left = 0;
	let right = height.length - 1;
	
	while (left < right) {
		const width = right - left;
		const currentHeight = Math.min(height[left], height[right]);
		const area = width * currentHeight;
		maxArea = Math.max(maxArea, area);
		
		// Move the pointer pointing to the shorter line
		if (height[left] < height[right]) {
			left++;
		} else {
			right--;
		}
	}
	
	return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1

// node Grind169/ans/3-20-ans1.js
