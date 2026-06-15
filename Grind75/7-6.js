/*
7-6. Task Scheduler
https://leetcode.com/problems/task-scheduler/

You are given an array of CPU tasks, each labeled with a letter from A to Z, and a number n. Each CPU interval can be used to complete one task or left idle. Tasks can be completed in any order, but there's a constraint: there must be at least n intervals between any two identical tasks.

Return the least number of intervals needed to complete all given tasks.

Example 1:

Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: A -> B -> idle -> A -> B -> idle -> A -> B

Example 2:

Input: tasks = ["A","A","A","B","B","B"], n = 3
Output: 10

Example 3:

Input: tasks = ["A","A","A","B","B","B","C","C","C"], n = 2
Output: 9

Constraints:

1 <= task.length <= 104
tasks[i] is upper-case English letter.
The integer n is in the range [0, 100].
*/

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {

};

console.log(leastInterval(["A","A","A","B","B","B"], 2));              // 8
console.log(leastInterval(["A","A","A","B","B","B"], 3));              // 10
console.log(leastInterval(["A","A","A","B","B","B","C","C","C"], 2));  // 9

// node Grind75/7-6.js
