/*
Medium | 25 mins
528. Random Pick with Weight
https://leetcode.com/problems/random-pick-with-weight/

Given positive weights w, implement a picker that returns an index.
The probability of returning index i must be w[i] / sum(w).

Strategy: Prefix Sum + Binary Search
- Build prefix sum array
- For each random call, generate random number in [0, total)
- Use binary search to find the corresponding index
*/

/**
 * @param {number[]} w
 */
var Solution = function (w) {
    this.prefixSum = [];
    let sum = 0;
    for (let weight of w) {
        sum += weight;
        this.prefixSum.push(sum);
    }
    this.totalSum = sum;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
    const target = Math.random() * this.totalSum;
    
    // Binary search to find the first index where prefixSum >= target
    let left = 0, right = this.prefixSum.length - 1;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (this.prefixSum[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return left;
};

const weightedPicker = new Solution([1, 3]);
console.log(weightedPicker.pickIndex()); // 0 or 1; index 1 is three times likelier
console.log(weightedPicker.pickIndex()); // 0 or 1; index 1 is three times likelier

// node Grind169/ans/6-3-ans1.js
