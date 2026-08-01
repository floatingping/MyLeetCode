/*
Medium | 35 mins
4-5. Task Scheduler
621. Task Scheduler
https://leetcode.com/problems/task-scheduler/
*/

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
	// Count frequency of each task
	const freqMap = new Map();
	for (const task of tasks) {
		freqMap.set(task, (freqMap.get(task) || 0) + 1);
	}
	
	// Find max frequency
	let maxFreq = 0;
	for (const freq of freqMap.values()) {
		maxFreq = Math.max(maxFreq, freq);
	}
	
	// Count how many tasks have max frequency
	let maxFreqCount = 0;
	for (const freq of freqMap.values()) {
		if (freq === maxFreq) {
			maxFreqCount++;
		}
	}
	
	// Calculate minimum intervals needed
	// Formula: (maxFreq - 1) * (n + 1) + maxFreqCount
	// This accounts for gaps between highest frequency tasks
	const minIntervals = Math.max((maxFreq - 1) * (n + 1) + maxFreqCount, tasks.length);
	
	return minIntervals;
};

console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2)); // 8
console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 0)); // 6
console.log(leastInterval(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2)); // 16

// node Grind169/ans/4-5-ans1.js
