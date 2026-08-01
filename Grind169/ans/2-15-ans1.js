/*
Medium | 30 mins
15. 3Sum
https://leetcode.com/problems/3sum/

Return all unique triplets [nums[i], nums[j], nums[k]] whose values sum to 0. The triplets may be returned in any order.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Example 2:
Input: nums = [0,1,1]
Output: []
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    
    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate values
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        // If current number is positive, no triplets sum to 0
        if (nums[i] > 0) break;
        
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                
                // Skip duplicate left values
                while (left < right && nums[left] === nums[left + 1]) left++;
                // Skip duplicate right values
                while (left < right && nums[right] === nums[right - 1]) right--;
                
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([0, 1, 1])); // []

// node Grind169/ans/2-15-ans1.js
