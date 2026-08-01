/*
Medium | 30 mins
3-5. Permutations
LeetCode 46: https://leetcode.com/problems/permutations/
Difficulty: Medium
Suggested time: 30 mins

Given an array nums of distinct integers, return every possible permutation.
You may return the permutations in any order.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
	const result = [];
	
	const backtrack = (nums, permutation) => {
		if (nums.length === 0) {
			result.push(permutation);
			return;
		}
		
		for (let i = 0; i < nums.length; i++) {
			const n = nums[i];
			const remaining = nums.slice(0, i).concat(nums.slice(i + 1));
			backtrack(remaining, permutation.concat(n));
		}
	};
	
	backtrack(nums, []);
	return result;
};

console.log(permute([1, 2, 3])); // [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
console.log(permute([0, 1])); // [[0, 1], [1, 0]]
console.log(permute([1])); // [[1]]

// node Grind169/ans/3-5-ans1.js
