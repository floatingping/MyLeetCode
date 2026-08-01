/*
Medium | 30 mins
LeetCode #128. Longest Consecutive Sequence
https://leetcode.com/problems/longest-consecutive-sequence/

Given an unsorted array of integers nums, return the length of the longest consecutive-elements sequence.
The solution must run in O(n) time.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0;
    
    const numSet = new Set(nums);
    let maxLength = 0;
    
    for (const num of numSet) {
        // Only start counting from the beginning of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let length = 1;
            
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                length++;
            }
            
            maxLength = Math.max(maxLength, length);
        }
    }
    
    return maxLength;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
console.log(longestConsecutive([1, 0, 1, 2])); // 3

// node Grind169/ans/5-6-ans1.js
