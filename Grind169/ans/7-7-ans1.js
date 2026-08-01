/*
Non-overlapping Intervals - Greedy
Time Complexity: O(n log n)
Space Complexity: O(1)
*/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    // Sort by end time
    intervals.sort((a, b) => a[1] - b[1]);

    let count = 0;
    let lastEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < lastEnd) {
            // Overlapping, remove this interval
            count++;
        } else {
            // Non-overlapping, update lastEnd
            lastEnd = intervals[i][1];
        }
    }

    return count;
};

console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]])); // 1
console.log(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]])); // 2

// node Grind169/ans/7-7-ans1.js
