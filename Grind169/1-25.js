/*
Easy | 20 mins
252. Meeting Rooms
https://leetcode.com/problems/meeting-rooms/

Given an array of meeting time intervals where intervals[i] = [starti, endi], return true if one person can attend every meeting.

Example 1:

Input: intervals = [[0,30],[5,10],[15,20]]
Output: false
Explanation: The meeting [0,30] overlaps the other meetings.

Example 2:

Input: intervals = [[7,10],[2,4]]
Output: true
Explanation: The two meetings do not overlap.

Constraints:

0 <= intervals.length <= 10^4
intervals[i].length == 2
0 <= starti < endi <= 10^6
*/

/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function (intervals) {



};

console.log(canAttendMeetings([[0, 30], [5, 10], [15, 20]])); // false
console.log(canAttendMeetings([[7, 10], [2, 4]])); // true
console.log(canAttendMeetings([])); // true


// node Grind169/1-25.js
