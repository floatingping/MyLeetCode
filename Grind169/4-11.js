/*
Medium | 30 mins
4-11. Next Permutation
31. Next Permutation
https://leetcode.com/problems/next-permutation/

A permutation of an array of integers is an arrangement of its members into a sequence or linear order. The next permutation of an array is the next lexicographically greater permutation of its integer sequence. More formally, if all permutations of the array are sorted in one container according to their lexicographical order, then the next permutation is the permutation that follows it in that sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (sorted in ascending order).

Given an array of integers nums, rearrange the numbers into the lexicographically next greater permutation of numbers. If such an arrangement is not possible, rearrange it as the lowest possible order. The replacement must be in place and use only constant extra memory.

Example 1:

Input: nums = [1,2,3]
Output: [1,3,2]
Example 2:

Input: nums = [3,2,1]
Output: [1,2,3]
Example 3:

Input: nums = [1,1,5]
Output: [1,5,1]

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 100
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {



};

const firstPermutation = [1, 2, 3];
nextPermutation(firstPermutation);
console.log(firstPermutation); // [1, 3, 2]
const secondPermutation = [3, 2, 1];
nextPermutation(secondPermutation);
console.log(secondPermutation); // [1, 2, 3]
const thirdPermutation = [1, 1, 5];
nextPermutation(thirdPermutation);
console.log(thirdPermutation); // [1, 5, 1]


// node Grind169/4-11.js
