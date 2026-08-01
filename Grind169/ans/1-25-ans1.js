/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function (intervals) {
    // Sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);
    
    // Check if any two meetings overlap
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < intervals[i - 1][1]) {
            return false;
        }
    }
    
    return true;
};

console.log(canAttendMeetings([[0, 30], [5, 10], [15, 20]])); // false
console.log(canAttendMeetings([[7, 10], [2, 4]])); // true
console.log(canAttendMeetings([])); // true

// node Grind169/ans/1-25-ans1.js
