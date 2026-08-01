/*
Combination Sum IV - Dynamic Programming
Time Complexity: O(n * target)
Space Complexity: O(target)
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
    const dp = new Array(target + 1).fill(0);
    dp[0] = 1;

    for (let i = 1; i <= target; i++) {
        for (const num of nums) {
            if (i >= num) {
                dp[i] += dp[i - num];
            }
        }
    }

    return dp[target];
};

console.log(combinationSum4([1, 2, 3], 4)); // 7
console.log(combinationSum4([9], 3)); // 0

// node Grind169/ans/7-5-ans1.js
