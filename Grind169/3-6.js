/*
3-6. Merge Intervals
LeetCode 56: https://leetcode.com/problems/merge-intervals/
Difficulty: Medium
Suggested time: 30 mins

Given an array of intervals where intervals[i] = [starti, endi], merge all
overlapping intervals and return the non-overlapping intervals that cover every
interval in the input.

Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]

Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]

Constraints:
- 1 <= intervals.length <= 10^4
- intervals[i].length == 2
- 0 <= starti <= endi <= 10^4
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {

};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]])); // [[1, 6], [8, 10], [15, 18]]
console.log(merge([[1, 4], [4, 5]])); // [[1, 5]]

// node Grind169/3-6.js
