/*
Medium | 30 mins
3-4. Combination Sum
LeetCode 39: https://leetcode.com/problems/combination-sum/
Difficulty: Medium
Suggested time: 30 mins

Given an array of distinct integers candidates and an integer target, return
all unique combinations of candidates whose values sum to target. A candidate
may be selected any number of times. The combinations may be returned in any
order.
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
	const result = [];
	
	const backtrack = (combination, remain, start) => {
		if (remain === 0) {
			result.push([...combination]);
			return;
		}
		
		if (remain < 0) {
			return;
		}
		
		for (let i = start; i < candidates.length; i++) {
			combination.push(candidates[i]);
			backtrack(combination, remain - candidates[i], i);
			combination.pop();
		}
	};
	
	backtrack([], target, 0);
	return result;
};

console.log(combinationSum([2, 3, 6, 7], 7)); // [[2, 2, 3], [7]]
console.log(combinationSum([2, 3, 5], 8)); // [[2, 2, 2, 2], [2, 3, 3], [3, 5]]

// node Grind169/ans/3-4-ans1.js
