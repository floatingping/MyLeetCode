/*
LeetCode #210. Course Schedule II
https://leetcode.com/problems/course-schedule-ii/

There are numCourses courses labeled from 0 to numCourses - 1. prerequisites[i] = [ai, bi] means course bi must be completed before ai. Return any ordering that finishes all courses, or an empty array if it is impossible.

Example 1:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: [0,1]

Example 2:
Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Output: [0,2,1,3]
Explanation: [0,1,2,3] is also valid.

Example 3:
Input: numCourses = 1, prerequisites = []
Output: [0]

Constraints:
- 1 <= numCourses <= 2000
- 0 <= prerequisites.length <= numCourses * (numCourses - 1)
- prerequisites[i].length == 2
- 0 <= ai, bi < numCourses
- ai != bi
- All pairs [ai, bi] are distinct.
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {

};

console.log(findOrder(2, [[1, 0]])); // [0, 1]
console.log(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]])); // [0, 2, 1, 3] (one valid order)
console.log(findOrder(1, [])); // [0]

// node Grind169/5-3.js
