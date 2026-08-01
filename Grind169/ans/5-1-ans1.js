/*
Medium | 30 mins
LeetCode #300. Longest Increasing Subsequence
https://leetcode.com/problems/longest-increasing-subsequence/

Given an integer array nums, return the length of the longest strictly increasing subsequence.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    const n = nums.length;
    const dp = new Array(n).fill(1);
    
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    
    return Math.max(...dp);
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // 4
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])); // 4
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])); // 1

// node Grind169/ans/5-1-ans1.js
