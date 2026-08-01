/*
Medium | 25 mins
LeetCode #189. Rotate Array
https://leetcode.com/problems/rotate-array/

Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
Modify nums in place.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything; modify nums in-place instead.
 */
var rotate = function (nums, k) {
    const n = nums.length;
    k = k % n; // Handle k > n
    
    // Reverse entire array
    reverse(nums, 0, n - 1);
    // Reverse first k elements
    reverse(nums, 0, k - 1);
    // Reverse remaining elements
    reverse(nums, k, n - 1);
};

function reverse(nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}

const firstRotation = [1, 2, 3, 4, 5, 6, 7];
rotate(firstRotation, 3);
console.log(firstRotation); // [5, 6, 7, 1, 2, 3, 4]
const secondRotation = [-1, -100, 3, 99];
rotate(secondRotation, 2);
console.log(secondRotation); // [3, 99, -1, -100]

// node Grind169/ans/5-7-ans1.js
