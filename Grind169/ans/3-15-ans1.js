/*
Medium | 30 mins
3-15. Subsets
LeetCode 78: https://leetcode.com/problems/subsets/
Difficulty: Medium
Suggested time: 30 mins

Given an array nums of unique elements, return all possible subsets (the power
set). The solution set must not contain duplicate subsets and may be returned
in any order.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
	const result = [[]];
	
	for (const num of nums) {
		const newSubsets = [];
		for (const subset of result) {
			newSubsets.push([...subset, num]);
		}
		result.push(...newSubsets);
	}
	
	return result;
};

console.log(subsets([1, 2, 3])); // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
console.log(subsets([0])); // [[], [0]]

// node Grind169/ans/3-15-ans1.js
