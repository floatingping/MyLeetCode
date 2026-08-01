/*
Medium | 30 mins
362. Design Hit Counter
https://leetcode.com/problems/design-hit-counter/
Difficulty: Medium | Suggested time: 30 mins

Design a hit counter that records hits and returns the number of hits received
in the past 5 minutes (300 seconds), including the current timestamp.

Example:
Input: ["HitCounter", "hit", "hit", "hit", "getHits", "getHits", "getHits"]
Input: [[], [1], [2], [3], [4], [300], [301]]
Output: [null, null, null, null, 3, 3, 2]

Constraints:
- 1 <= timestamp <= 2 * 10^9
- Timestamps are passed in non-decreasing order.
- At most 300 calls are made to hit and getHits.
*/

/**
 * Initialize the hit counter.
 */
var HitCounter = function () {

};

/**
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function (timestamp) {

};

/**
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function (timestamp) {

};

const counter = new HitCounter();
counter.hit(1);
counter.hit(2);
counter.hit(3);
console.log(counter.getHits(4)); // 3
console.log(counter.getHits(300)); // 3
console.log(counter.getHits(301)); // 2

// node Grind169/6-8.js
