/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    const sum = nums.reduce((a, c) => a + c, 0);
    if (sum % 2 !== 0) return false;

    const target = sum / 2;
    const dp = new Array(target + 1).fill(false);
    dp[0] = true;

    for (const n of nums) {
        for (let i = target; i >= n; i--) {
            dp[i] = dp[i] || dp[i - n];
        }
    }

    return dp[target];
};


canPartition([1, 5, 11, 5]); // true
canPartition([1, 2, 3, 5]); // false

