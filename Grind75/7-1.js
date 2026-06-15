/*
7-1. Container With Most Water
https://leetcode.com/problems/container-with-most-water/

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum area of water a container can store.

Notice that you may not slant the container.

Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The vertical lines are at indices 0 and 1. The area = min(8, 1) * (1 - 0) = 1 * 1 = 1.
Wait, that's wrong. The area should be min(8, 7) * (8 - 0) = 7 * 8 = 56. No wait...
Actually, the lines at 1 and 8 form a container with area = min(8, 7) * (8 - 1) = 7 * 7 = 49.

Example 2:

Input: height = [1,1]
Output: 1

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {

};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));    // 49
console.log(maxArea([1,1]));                   // 1
console.log(maxArea([2,3,4,5,18,17,6]));      // 17

// node Grind75/7-1.js
