/*
5-4. Merge Intervals
https://leetcode.com/problems/merge-intervals/

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]

Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]

Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {

};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));    // [[1,6],[8,10],[15,18]]
console.log(merge([[1,4],[4,5]]));                    // [[1,5]]
console.log(merge([[1,2],[3,5],[4,9]]));              // [[1,2],[3,9]]
