/*
Medium | 20 mins
50. Pow(x, n)
https://leetcode.com/problems/powx-n/

Implement pow(x, n), which calculates x raised to the integer power n.

Strategy: Fast Exponentiation (Exponentiation by Squaring)
- x^n = (x^2)^(n/2) if n is even
- x^n = x * x^(n-1) if n is odd
- Time complexity: O(log n)
- Handle negative exponents and overflow cases
*/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n === 0) return 1;
    
    // Handle negative exponent
    let N = n;
    if (N < 0) {
        x = 1 / x;
        N = -N;
    }
    
    return fastPow(x, N);
};

function fastPow(x, n) {
    if (n === 0) {
        return 1.0;
    }
    
    const half = fastPow(x, Math.floor(n / 2));
    
    if (n % 2 === 0) {
        return half * half;
    } else {
        return half * half * x;
    }
}

// Iterative version
var myPowIterative = function (x, n) {
    if (n === 0) return 1;
    
    let N = n;
    if (N < 0) {
        x = 1 / x;
        N = -N;
    }
    
    let result = 1;
    let currentX = x;
    
    while (N > 0) {
        if (N % 2 === 1) {
            result *= currentX;
        }
        currentX *= currentX;
        N = Math.floor(N / 2);
    }
    
    return result;
};

console.log(myPow(2, 10)); // 1024
console.log(myPow(2.1, 3)); // 9.261
console.log(myPow(2, -2)); // 0.25

// node Grind169/ans/6-10-ans1.js
