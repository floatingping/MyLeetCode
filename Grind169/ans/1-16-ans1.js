/*
70. Climbing Stairs - Dynamic Programming
Time Complexity: O(n)
Space Complexity: O(1) - only storing last two values
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n <= 2) return n;
    
    let prev1 = 1;  // dp[1]
    let prev2 = 2;  // dp[2]
    
    for (let i = 3; i <= n; i++) {
        const current = prev1 + prev2;
        prev1 = prev2;
        prev2 = current;
    }
    
    return prev2;
};

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(5)); // 8

// node Grind169/ans/1-16-ans1.js
