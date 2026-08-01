/*
Medium | 30 mins
LeetCode #525. Contiguous Array
https://leetcode.com/problems/contiguous-array/

Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1 values.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    const map = new Map();
    map.set(0, -1); // Initial count with index -1
    
    let maxLength = 0;
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
        count += nums[i] === 1 ? 1 : -1;
        
        if (map.has(count)) {
            maxLength = Math.max(maxLength, i - map.get(count));
        } else {
            map.set(count, i);
        }
    }
    
    return maxLength;
};

console.log(findMaxLength([0, 1])); // 2
console.log(findMaxLength([0, 1, 0])); // 2

// node Grind169/ans/5-10-ans1.js
