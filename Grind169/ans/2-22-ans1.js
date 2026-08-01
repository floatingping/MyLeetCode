/*
Medium | 30 mins
238. Product of Array Except Self
https://leetcode.com/problems/product-of-array-except-self/

Return an array where answer[i] equals the product of every value in nums except nums[i], without using division.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);
    
    // First pass: calculate prefix product
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }
    
    // Second pass: calculate suffix product and multiply
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }
    
    return result;
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0, 0, 9, 0, 0]

// node Grind169/ans/2-22-ans1.js
