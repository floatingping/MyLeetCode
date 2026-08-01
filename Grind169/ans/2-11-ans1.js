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
*/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    const result = [];
    let i = 0;
    
    // Add all intervals that end before newInterval starts
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }
    
    // Merge overlapping intervals with newInterval
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    result.push(newInterval);
    
    // Add remaining intervals
    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }
    
    return result;
};

console.log(insert([[1, 3], [6, 9]], [2, 5])); // [[1, 5], [6, 9]]
console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])); // [[1, 2], [3, 10], [12, 16]]

// node Grind169/ans/2-11-ans1.js
