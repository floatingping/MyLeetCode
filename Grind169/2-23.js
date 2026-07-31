/*
155. Min Stack
https://leetcode.com/problems/min-stack/

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Example 1:
Input: ["MinStack","push","push","push","getMin","pop","top","getMin"]
	[[],[-2],[0],[-3],[],[],[],[]]
Output: [null,null,null,null,-3,null,0,-2]

Constraints:
- -2^31 <= val <= 2^31 - 1
- pop, top, and getMin are called only on non-empty stacks.
- At most 3 * 10^4 calls will be made to push, pop, top, and getMin.
*/

/**
 * Initialize your data structure here.
 */
var MinStack = function () {

};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {

};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {

};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {

};

const minStack = new MinStack();
console.log(minStack.push(-2)); // undefined
console.log(minStack.push(0)); // undefined
console.log(minStack.push(-3)); // undefined
console.log(minStack.getMin()); // -3
console.log(minStack.pop()); // undefined
console.log(minStack.top()); // 0
console.log(minStack.getMin()); // -2

// node Grind169/2-23.js
