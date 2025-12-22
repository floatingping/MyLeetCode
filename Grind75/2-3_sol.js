/**
 * LeetCode Grind 75 - 2-3 Solution
 * Climbing Stairs (Easy - 20 mins)
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // Dynamic Programming 方法
    // dp[i] 代表達到第 i 階的方式數量
    // dp[i] = dp[i-1] + dp[i-2]（Fibonacci 序列）
    
    if (n === 1) return 1;
    if (n === 2) return 2;
    
    let prev2 = 1, prev1 = 2;
    for (let i = 3; i <= n; i++) {
        const current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
};

// 測試案例 1
console.log("=== Test Case 1 ===");
console.log("Expected: 2, Got:", climbStairs(2));

// 測試案例 2
console.log("\n=== Test Case 2 ===");
console.log("Expected: 3, Got:", climbStairs(3));

// 測試案例 3
console.log("\n=== Test Case 3 ===");
console.log("Expected: 5, Got:", climbStairs(4));
