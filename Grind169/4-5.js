/*
4-5. Task Scheduler
621. Task Scheduler
https://leetcode.com/problems/task-scheduler/

You are given an array of CPU tasks, each represented by a capital letter A to Z, and an integer n. Each CPU interval can be idle or allow the completion of one task. Tasks can be completed in any order, but there must be at least n intervals between two tasks with the same label.

Return the minimum number of CPU intervals required to complete all tasks.

Example 1:

Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.
Example 2:

Input: tasks = ["A","A","A","B","B","B"], n = 0
Output: 6
Explanation: On the same clock cycle, we can execute a task followed by another task.
Example 3:

Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
Output: 16

Constraints:

1 <= tasks.length <= 10^4
tasks[i] is an uppercase English letter.
0 <= n <= 100
*/

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {



};

console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2)); // 8
console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 0)); // 6
console.log(leastInterval(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2)); // 16


// node Grind169/4-5.js
