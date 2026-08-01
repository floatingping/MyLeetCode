/*
Easy | 20 mins
232. Implement Queue using Stacks
https://leetcode.com/problems/implement-queue-using-stacks/

Implement a first-in, first-out queue using only two stacks. Support push, pop, peek, and empty operations.

Example 1:

Input: ["MyQueue", "push", "push", "peek", "pop", "empty"]
	[[], [1], [2], [], [], []]
Output: [null, null, null, 1, 1, false]
Explanation: Values leave the queue in insertion order.

Constraints:

1 <= x <= 9
At most 100 calls are made to push, pop, peek, and empty.
Every call to pop and peek is valid.
*/

/**
 * @class
 */
var MyQueue = function () {



};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {



};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {



};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {



};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {



};

const myQueue = new MyQueue();
myQueue.push(1);
myQueue.push(2);
console.log(myQueue.peek()); // 1
console.log(myQueue.pop()); // 1
console.log(myQueue.empty()); // false


// node Grind169/1-13.js
