/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    const result = new Array(n + 1).fill(0);
    
    for (let i = 1; i <= n; i++) {
        // dp[i] = dp[i >> 1] + (i & 1)
        // i >> 1 removes the last bit
        // i & 1 gets the last bit
        result[i] = result[i >> 1] + (i & 1);
    }
    
    return result;
};

console.log(countBits(2)); // [0, 1, 1]
console.log(countBits(5)); // [0, 1, 1, 2, 1, 2]
console.log(countBits(0)); // [0]

// node Grind169/ans/1-28-ans1.js
