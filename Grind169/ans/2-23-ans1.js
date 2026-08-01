/*
Medium | 20 mins
155. Min Stack
https://leetcode.com/problems/min-stack/

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Example 1:
Input: ["MinStack","push","push","push","getMin","pop","top","getMin"]
	[[],[-2],[0],[-3],[],[],[],[]]
Output: [null,null,null,null,-3,null,0,-2]
*/

/**
 * Initialize your data structure here.
 */
var MinStack = function () {
    this.stack = [];
    this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack.push(val);
    
    // Only push to minStack if it's the first element or val is <= current min
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const val = this.stack.pop();
    
    // If popped value is the current minimum, also pop from minStack
    if (val === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minStack[this.minStack.length - 1];
};

const minStack = new MinStack();
console.log(minStack.push(-2)); // undefined
console.log(minStack.push(0)); // undefined
console.log(minStack.push(-3)); // undefined
console.log(minStack.getMin()); // -3
console.log(minStack.pop()); // undefined
console.log(minStack.top()); // 0
console.log(minStack.getMin()); // -2

// node Grind169/ans/2-23-ans1.js
