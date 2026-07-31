/*
895. Maximum Frequency Stack
https://leetcode.com/problems/maximum-frequency-stack/

Design a stack-like data structure that removes the value with the highest
frequency. If multiple values share that frequency, remove the most recently
pushed one.

Example:
push(5), push(7), push(5), push(7), push(4), push(5)
pop() -> 5, pop() -> 7, pop() -> 5, pop() -> 4

Constraints:
- 0 <= val <= 10^9
- At most 2 * 10^4 calls are made to push and pop.
*/

class FreqStack {
	constructor() {

	}

	/**
	 * @param {number} val
	 * @return {void}
	 */
	push(val) {

	}

	/**
	 * @return {number}
	 */
	pop() {

	}
}

const freqStack = new FreqStack();
freqStack.push(5);
freqStack.push(7);
freqStack.push(5);
freqStack.push(7);
freqStack.push(4);
freqStack.push(5);
console.log(freqStack.pop()); // 5
console.log(freqStack.pop()); // 7
console.log(freqStack.pop()); // 5
console.log(freqStack.pop()); // 4

// node Grind169/8-1.js
