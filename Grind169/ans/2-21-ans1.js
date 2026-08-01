/*
Medium | 25 mins
322. Coin Change
https://leetcode.com/problems/coin-change/

Given coin denominations and an amount, return the fewest coins needed to make that amount, or -1 when it is impossible.

Example 1:
Input: coins = [1,2,5], amount = 11
Output: 3

Example 2:
Input: coins = [2], amount = 3
Output: -1
*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    
    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    return dp[amount] === Infinity ? -1 : dp[amount];
};

console.log(coinChange([1, 2, 5], 11)); // 3
console.log(coinChange([2], 3)); // -1

// node Grind169/ans/2-21-ans1.js
