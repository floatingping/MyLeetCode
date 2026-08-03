/*
Medium | 20 mins
7-7. Non-overlapping Intervals
Difficulty: Medium
Suggested time: 20 mins

435. Non-overlapping Intervals
https://leetcode.com/problems/non-overlapping-intervals/

Given an array of intervals where intervals[i] = [starti, endi], return the
minimum number of intervals to remove so that the remaining intervals do not
overlap.


Example 1:
Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1

Example 2:
Input: intervals = [[1,2],[1,2],[1,2]]
Output: 2

Constraints:
- 1 <= intervals.length <= 10^5
- intervals[i].length == 2
- -5 * 10^4 <= starti < endi <= 5 * 10^4
*/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {

};

console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]])); // 1
console.log(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]])); // 2

// node Grind169/7-7.js
