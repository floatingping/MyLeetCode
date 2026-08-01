/*
Medium | 25 mins
57. Insert Interval
https://leetcode.com/problems/insert-interval/

Insert newInterval into sorted, non-overlapping intervals, merging overlaps, and return the resulting intervals.

Example 1:
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Example 2:
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]

Constraints:
- 0 <= intervals.length <= 10^4
- intervals[i].length == newInterval.length == 2
- 0 <= starti <= endi <= 10^5
- intervals is sorted by starti and has no overlapping intervals.
*/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {

};

console.log(insert([[1, 3], [6, 9]], [2, 5])); // [[1, 5], [6, 9]]
console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])); // [[1, 2], [3, 10], [12, 16]]

// node Grind169/2-11.js
