/*
Medium | 30 mins
253. Meeting Rooms II
https://leetcode.com/problems/meeting-rooms-ii/

Given meeting intervals, return the minimum number of conference rooms required.

Strategy: Event-based approach with Priority Queue (Min Heap)
- Create events: start and end times
- Sort events by time (ends before starts if same time)
- Process events: increment for start, decrement for end
- Track maximum concurrent meetings
*/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
    if (!intervals || intervals.length === 0) {
        return 0;
    }
    
    // Create events: [time, type] where type: 0 = end, 1 = start
    const events = [];
    for (let interval of intervals) {
        events.push([interval[0], 1]); // start
        events.push([interval[1], 0]); // end
    }
    
    // Sort events: by time, then ends before starts (0 before 1)
    events.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }
        return a[1] - b[1]; // end (0) before start (1) at same time
    });
    
    let rooms = 0;
    let maxRooms = 0;
    
    for (let event of events) {
        if (event[1] === 1) { // start
            rooms++;
            maxRooms = Math.max(maxRooms, rooms);
        } else { // end
            rooms--;
        }
    }
    
    return maxRooms;
};

// Alternative: Min Heap approach (more explicit)
var minMeetingRoomsHeap = function (intervals) {
    if (!intervals || intervals.length === 0) {
        return 0;
    }
    
    // Sort by start time
    intervals.sort((a, b) => a[0] - b[0]);
    
    // Min heap of end times
    const heap = [intervals[0][1]];
    
    for (let i = 1; i < intervals.length; i++) {
        const start = intervals[i][0];
        const end = intervals[i][1];
        
        // If earliest end time <= current start, reuse room
        if (heap[0] <= start) {
            heap.shift(); // Remove earliest end time
        }
        
        // Add current end time
        heap.push(end);
        heap.sort((a, b) => a - b); // Keep heap sorted
    }
    
    return heap.length;
};

console.log(minMeetingRooms([[0, 30], [5, 10], [15, 20]])); // 2
console.log(minMeetingRooms([[7, 10], [2, 4]])); // 1

// node Grind169/ans/6-14-ans1.js
