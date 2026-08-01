/*
Medium | 25 mins
91. Decode Ways
https://leetcode.com/problems/decode-ways/

A message containing digits is decoded using "1" through "26" for letters A-Z.
Given a string s of digits, return the number of ways to decode it.

Strategy: Dynamic Programming
- dp[i] = number of ways to decode s[0..i-1]
- If s[i-1] is valid single digit (1-9), add dp[i-1]
- If s[i-2:i] forms valid two-digit code (10-26), add dp[i-2]
- Handle leading zeros carefully
*/

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    if (!s || s.length === 0 || s[0] === '0') {
        return 0;
    }
    
    const n = s.length;
    const dp = Array(n + 1).fill(0);
    dp[0] = 1; // Empty string has one way
    dp[1] = 1; // First character is valid (non-zero)
    
    for (let i = 2; i <= n; i++) {
        const oneDigit = parseInt(s[i - 1]);
        const twoDigit = parseInt(s.substring(i - 2, i));
        
        // Single digit decoding
        if (oneDigit >= 1 && oneDigit <= 9) {
            dp[i] += dp[i - 1];
        }
        
        // Two digit decoding
        if (twoDigit >= 10 && twoDigit <= 26) {
            dp[i] += dp[i - 2];
        }
    }
    
    return dp[n];
};

console.log(numDecodings("12")); // 2
console.log(numDecodings("226")); // 3
console.log(numDecodings("06")); // 0

// node Grind169/ans/6-13-ans1.js
