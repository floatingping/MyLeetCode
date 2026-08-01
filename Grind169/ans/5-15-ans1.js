/*
Medium | 20 mins
LeetCode #55. Jump Game
https://leetcode.com/problems/jump-game/

You start at index 0 of nums. Each value is the maximum length of a forward jump from that position.
Return true if you can reach the last index, otherwise false.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let maxReach = 0;
    
    for (let i = 0; i < nums.length; i++) {
        // If current index is beyond what we can reach, we can't proceed
        if (i > maxReach) {
            return false;
        }
        
        // Update the farthest position we can reach
        maxReach = Math.max(maxReach, i + nums[i]);
        
        // If we can reach the last index, return true
        if (maxReach >= nums.length - 1) {
            return true;
        }
    }
    
    return false;
};

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false

// node Grind169/ans/5-15-ans1.js
