var insert = function(intervals, newInterval) {
    const result = [];
    let i = 0;
    const [newStart, newEnd] = newInterval;

    // Add all intervals that end before newInterval starts
    while (i < intervals.length && intervals[i][1] < newStart) {
        result.push(intervals[i]);
        i++;
    }

    // Merge overlapping intervals
    let start = newStart;
    let end = newEnd;
    while (i < intervals.length && intervals[i][0] <= end) {
        start = Math.min(start, intervals[i][0]);
        end = Math.max(end, intervals[i][1]);
        i++;
    }
    result.push([start, end]);

    // Add remaining intervals
    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }

    return result;
};

console.log(insert([[1,2],[3,5],[6,9]], [2,5])); // [[1,5],[6,9]]
console.log(insert([[1,5],[6,9]], [2,3])); // [[1,5],[6,9]]
console.log(insert([[1,5]], [2,7])); // [[1,7]]

// node Grind75/3-1_ans.js
