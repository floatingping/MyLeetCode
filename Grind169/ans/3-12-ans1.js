/*
Medium | 30 mins
3-12. Partition Equal Subset Sum
LeetCode 416: https://leetcode.com/problems/partition-equal-subset-sum/
Difficulty: Medium
Suggested time: 30 mins

Given a non-empty array nums containing only positive integers, return true if
the array can be partitioned into two subsets whose elements have equal sums.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
	const total = nums.reduce((sum, num) => sum + num, 0);
	
	// If total is odd, we can't partition into two equal subsets
	if (total % 2 !== 0) {
		return false;
	}
	
	const target = total / 2;
	const dp = new Array(target + 1).fill(false);
	dp[0] = true;
	
	for (const num of nums) {
		// Traverse from right to left to avoid using the same element twice
		for (let i = target; i >= num; i--) {
			dp[i] = dp[i] || dp[i - num];
		}
	}
	
	return dp[target];
};

console.log(canPartition([1, 5, 11, 5])); // true
console.log(canPartition([1, 2, 3, 5])); // false

// node Grind169/ans/3-12-ans1.js
