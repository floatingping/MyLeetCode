/*
Medium | 35 mins
560. Subarray Sum Equals K
https://leetcode.com/problems/subarray-sum-equals-k/

Given an integer array nums and an integer k, return the total number of
non-empty subarrays whose elements sum to k.

Strategy: Use HashMap to store prefix sums
- Iterate through array, maintain running sum
- For each position, check if (currentSum - k) exists in map
- This count represents all valid subarrays ending at current position
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    const sumMap = new Map();
    sumMap.set(0, 1); // Initialize with prefix sum 0
    let currentSum = 0;
    let count = 0;
    
    for (let num of nums) {
        currentSum += num;
        // Check if (currentSum - k) exists in map
        if (sumMap.has(currentSum - k)) {
            count += sumMap.get(currentSum - k);
        }
        // Add current sum to map
        sumMap.set(currentSum, (sumMap.get(currentSum) || 0) + 1);
    }
    
    return count;
};

console.log(subarraySum([1, 1, 1], 2)); // 2
console.log(subarraySum([1, 2, 3], 3)); // 2

// node Grind169/ans/6-1-ans1.js
