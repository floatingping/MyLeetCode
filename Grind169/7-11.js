/*
Hard | 30 mins
7-11. Find Median from Data Stream
Difficulty: Hard
Suggested time: 30 mins

295. Find Median from Data Stream
https://leetcode.com/problems/find-median-from-data-stream/

Example:
Input: ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
	[[], [1], [2], [], [3], []]
Output: [null, null, null, 1.5, null, 2.0]
*/

class MedianFinder {
	constructor() {

	}

	/**
	 * @param {number} num
	 * @return {void}
	 */
	addNum(num) {

	}

	/** @return {number} */
	findMedian() {

	}
}

const medianFinder = new MedianFinder();
medianFinder.addNum(1);
medianFinder.addNum(2);
console.log(medianFinder.findMedian()); // 1.5
medianFinder.addNum(3);
console.log(medianFinder.findMedian()); // 2

// node Grind169/7-11.js
