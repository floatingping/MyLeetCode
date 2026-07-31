/*
632. Smallest Range Covering Elements from K Lists
https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/

Given k sorted integer lists, find the smallest inclusive range that contains
at least one number from every list. For equal widths, choose the range with
the smaller left endpoint.

Examples:
nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]] -> [20,24]
nums = [[1,2,3],[1,2,3],[1,2,3]] -> [1,1]

Constraints:
- nums.length == k
- 1 <= k <= 3500
- 1 <= nums[i].length <= 50
- -10^5 <= nums[i][j] <= 10^5
- nums[i] is sorted in non-decreasing order.
*/

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function (nums) {

};

console.log(smallestRange([[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]])); // [20, 24]
console.log(smallestRange([[1, 2, 3], [1, 2, 3], [1, 2, 3]])); // [1, 1]

// node Grind169/8-16.js
