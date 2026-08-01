/*
Medium | 25 mins
528. Random Pick with Weight
https://leetcode.com/problems/random-pick-with-weight/
Difficulty: Medium | Suggested time: 25 mins

Given positive weights w, implement a picker that returns an index in [0,
w.length - 1]. The probability of returning index i must be w[i] divided by
the sum of all weights.

Example:
Input: ["Solution", "pickIndex", "pickIndex", "pickIndex"], [[[1, 3]], [], [], []]
Output: [null, 1, 1, 0]
Explanation: Index 1 is selected three times as often as index 0 over many calls.

Constraints:
- 1 <= w.length <= 10^4
- 1 <= w[i] <= 10^5
- pickIndex will be called at most 10^4 times.
*/

/**
 * @param {number[]} w
 */
var Solution = function (w) {

};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {

};

const weightedPicker = new Solution([1, 3]);
console.log(weightedPicker.pickIndex()); // 0 or 1; index 1 is three times likelier
console.log(weightedPicker.pickIndex()); // 0 or 1; index 1 is three times likelier

// node Grind169/6-3.js
