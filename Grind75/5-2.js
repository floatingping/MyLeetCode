/*
5-2. Combination Sum
https://leetcode.com/problems/combination-sum/

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target.

You may return the combinations in any order.

The same number in candidates may be chosen an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]

Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]

Example 3:

Input: candidates = [2], target = 1
Output: []

Constraints:

1 <= candidates.length <= 30
2 <= candidates[i] <= 40
All elements of candidates are distinct.
1 <= target <= 500
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {

};

console.log(combinationSum([2,3,6,7], 7));    // [[2,2,3],[7]]
console.log(combinationSum([2,3,5], 8));      // [[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationSum([2], 1));          // []
console.log(combinationSum([3,6,9], 9));      // [[3,3,3],[6,3],[9]]

// node Grind75/5-2.js
