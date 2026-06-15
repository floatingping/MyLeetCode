/*
8-5. Find Median from Data Stream
https://leetcode.com/problems/find-median-from-data-stream/

The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

- For example, for arr = [1,2,3], the median is 3.
- For example, for arr = [1,2], the median is (1 + 2) / 2 = 1.5.

Implement the MedianFinder class:

- MedianFinder() initializes the MedianFinder object.
- void addNum(int num) adds the integer num from the data stream to the data structure.
- double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.

Example 1:

Input
["MedianFinder", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [], [2], []]

Output
[null, null, 1.0, null, 1.5]

Constraints:

-105 <= num <= 105
There will be at least one element in the data structure before calling findMedian.
At most 5 * 104 calls will be made to addNum and findMedian.

Follow-up:
- If all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?
- If 99% of all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?
*/

var MedianFinder = function () {

};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {

};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {

};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

// Test cases
let mf = new MedianFinder();
mf.addNum(1);
console.log(mf.findMedian());    // 1.0
mf.addNum(2);
console.log(mf.findMedian());    // 1.5
mf.addNum(3);
console.log(mf.findMedian());    // 2.0

// node Grind75/8-5.js
