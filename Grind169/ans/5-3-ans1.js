/*
Medium | 35 mins
LeetCode #210. Course Schedule II
https://leetcode.com/problems/course-schedule-ii/

There are numCourses courses labeled from 0 to numCourses - 1. prerequisites[i] = [ai, bi] means course bi must be completed before ai.
Return any ordering that finishes all courses, or an empty array if it is impossible.
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    // Build adjacency list and in-degree array
    const adj = new Map();
    const inDegree = new Array(numCourses).fill(0);
    
    for (let i = 0; i < numCourses; i++) {
        adj.set(i, []);
    }
    
    for (const [course, prereq] of prerequisites) {
        adj.get(prereq).push(course);
        inDegree[course]++;
    }
    
    // Topological sort using Kahn's algorithm
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }
    
    const result = [];
    while (queue.length > 0) {
        const course = queue.shift();
        result.push(course);
        
        for (const nextCourse of adj.get(course)) {
            inDegree[nextCourse]--;
            if (inDegree[nextCourse] === 0) {
                queue.push(nextCourse);
            }
        }
    }
    
    // If all courses are processed, return the order; otherwise, there's a cycle
    return result.length === numCourses ? result : [];
};

console.log(findOrder(2, [[1, 0]])); // [0, 1]
console.log(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]])); // [0, 2, 1, 3] (one valid order)
console.log(findOrder(1, [])); // [0]

// node Grind169/ans/5-3-ans1.js
