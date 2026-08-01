/*
Medium | 30 mins
207. Course Schedule
https://leetcode.com/problems/course-schedule/

Return true if all numCourses courses can be finished given prerequisite pairs [a, b], meaning b must be taken before a.

Example 1:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true

Example 2:
Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    // Build adjacency list and in-degree map
    const graph = new Map();
    const inDegree = new Map();
    
    for (let i = 0; i < numCourses; i++) {
        graph.set(i, []);
        inDegree.set(i, 0);
    }
    
    for (const [a, b] of prerequisites) {
        graph.get(b).push(a);
        inDegree.set(a, inDegree.get(a) + 1);
    }
    
    // Topological sort using Kahn's algorithm
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree.get(i) === 0) {
            queue.push(i);
        }
    }
    
    let count = 0;
    while (queue.length > 0) {
        const course = queue.shift();
        count++;
        
        for (const dependent of graph.get(course)) {
            inDegree.set(dependent, inDegree.get(dependent) - 1);
            if (inDegree.get(dependent) === 0) {
                queue.push(dependent);
            }
        }
    }
    
    return count === numCourses;
};

console.log(canFinish(2, [[1, 0]])); // true
console.log(canFinish(2, [[1, 0], [0, 1]])); // false

// node Grind169/ans/2-19-ans1.js
