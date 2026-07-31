/*
759. Employee Free Time
https://leetcode.com/problems/employee-free-time/

Each employee has a list of non-overlapping, sorted working intervals. Return
the finite intervals when every employee is free, excluding unbounded time.

Example:
schedule = [[[1,2],[5,6]], [[1,3]], [[4,10]]] -> [[3,4]]

Constraints:
- 1 <= schedule.length, schedule[i].length <= 50
- 0 <= interval.start < interval.end <= 10^9
- Intervals for an employee are sorted and non-overlapping.
*/

/**
 * Definition for an Interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

/**
 * @param {Interval[][]} schedule
 * @return {Interval[]}
 */
var employeeFreeTime = function (schedule) {

};

console.log(employeeFreeTime([[[1, 2], [5, 6]], [[1, 3]], [[4, 10]]])); // [[3, 4]]

// node Grind169/8-6.js
