var coinChange = function (coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};

console.log(coinChange([1, 2, 5], 5));     // 2
console.log(coinChange([2], 3));           // -1
console.log(coinChange([10], 10));         // 1
console.log(coinChange([1], 0));           // 0
console.log(coinChange([2, 5, 10], 27));   // 4

// node Grind75/4-3_ans.js
