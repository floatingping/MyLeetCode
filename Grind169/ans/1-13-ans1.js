/*
232. Implement Queue using Stacks
Time Complexity: push - O(1), pop/peek - O(n) amortized
Space Complexity: O(n)
*/

/**
 * @class
 */
var MyQueue = function () {
    this.pushStack = [];  // for push operations
    this.popStack = [];   // for pop/peek operations
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.pushStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.popStack.length === 0) {
        while (this.pushStack.length > 0) {
            this.popStack.push(this.pushStack.pop());
        }
    }
    return this.popStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (this.popStack.length === 0) {
        while (this.pushStack.length > 0) {
            this.popStack.push(this.pushStack.pop());
        }
    }
    return this.popStack[this.popStack.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.pushStack.length === 0 && this.popStack.length === 0;
};

// Test
const queue = new MyQueue();
queue.push(1);
queue.push(2);
console.log(queue.peek()); // 1
console.log(queue.pop());  // 1
console.log(queue.empty()); // false

// node Grind169/ans/1-13-ans1.js
