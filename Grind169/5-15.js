/*
Medium | 20 mins
LeetCode #55. Jump Game
https://leetcode.com/problems/jump-game/

You start at index 0 of nums. Each value is the maximum length of a forward jump from that position. Return true if you can reach the last index, otherwise false.

Example 1:
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump from index 0 to 1, then from 1 to the last index.

Example 2:
Input: nums = [3,2,1,0,4]
Output: false
Explanation: You always reach index 3, whose maximum jump length is 0.

Constraints:
- 1 <= nums.length <= 10^4
- 0 <= nums[i] <= 10^5
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {

};

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false

// node Grind169/5-15.js
