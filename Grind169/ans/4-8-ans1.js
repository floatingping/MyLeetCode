/*
Medium | 30 mins
4-8. Daily Temperatures
739. Daily Temperatures
https://leetcode.com/problems/daily-temperatures/
*/

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
	const n = temperatures.length;
	const answer = new Array(n).fill(0);
	const stack = []; // Stack to store indices
	
	for (let i = 0; i < n; i++) {
		// Pop from stack while current temperature is greater
		while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
			const prevIndex = stack.pop();
			answer[prevIndex] = i - prevIndex;
		}
		stack.push(i);
	}
	
	return answer;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1, 1, 4, 2, 1, 1, 0, 0]
console.log(dailyTemperatures([30, 40, 50, 60])); // [1, 1, 1, 0]
console.log(dailyTemperatures([30, 60, 90])); // [1, 1, 0]

// node Grind169/ans/4-8-ans1.js
