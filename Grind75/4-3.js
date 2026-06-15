/*
4-3. Coin Change
https://leetcode.com/problems/coin-change/

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Example 1:

Input: coins = [1,2,5], amount = 5
Output: 1
Explanation: 5 = 5

Example 2:

Input: coins = [2], amount = 3
Output: -1

Example 3:

Input: coins = [10], amount = 10
Output: 1

Constraints:

1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104
*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {};

console.log(coinChange([1, 2, 5], 5)); // 1
console.log(coinChange([2], 3)); // -1
console.log(coinChange([10], 10)); // 1
console.log(coinChange([1], 0)); // 0
console.log(coinChange([2, 5, 10], 27)); // 4

// node Grind75/4-3.js
