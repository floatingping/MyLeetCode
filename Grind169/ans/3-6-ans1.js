/*
Medium | 30 mins
3-6. Merge Intervals
LeetCode 56: https://leetcode.com/problems/merge-intervals/
Difficulty: Medium
Suggested time: 30 mins

Given an array of intervals where intervals[i] = [starti, endi], merge all
overlapping intervals and return the non-overlapping intervals that cover every
interval in the input.
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	if (intervals.length <= 1) return intervals;
	
	// Sort intervals by start time
	intervals.sort((a, b) => a[0] - b[0]);
	
	const result = [intervals[0]];
	
	for (let i = 1; i < intervals.length; i++) {
		const lastInterval = result[result.length - 1];
		const currentInterval = intervals[i];
		
		// If current interval overlaps with the last one, merge them
		if (currentInterval[0] <= lastInterval[1]) {
			lastInterval[1] = Math.max(lastInterval[1], currentInterval[1]);
		} else {
			// No overlap, add the current interval
			result.push(currentInterval);
		}
	}
	
	return result;
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]])); // [[1, 6], [8, 10], [15, 18]]
console.log(merge([[1, 4], [4, 5]])); // [[1, 5]]

// node Grind169/ans/3-6-ans1.js
