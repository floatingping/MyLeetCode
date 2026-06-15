/*
26. Insert Interval
https://leetcode.com/problems/insert-interval/

You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

Example 1:
Input: intervals = [[1,2],[3,5],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Example 2:
Input: intervals = [[1,5],[6,9]], newInterval = [2,3]
Output: [[1,5],[6,9]]

Constraints:
0 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 105
newInterval.length == 2
0 <= start <= end <= 105
*/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {};

console.log(
    insert(
        [
            [1, 2],
            [3, 5],
            [6, 9]
        ],
        [2, 5]
    )
); // [[1,5],[6,9]]
console.log(
    insert(
        [
            [1, 5],
            [6, 9]
        ],
        [2, 3]
    )
); // [[1,5],[6,9]]
console.log(insert([[1, 5]], [2, 7])); // [[1,7]]

// node Grind75/3-1.js
