/*
Easy | 15 mins
190. Reverse Bits
https://leetcode.com/problems/reverse-bits/

Reverse the bits of a given 32-bit unsigned integer and return the resulting unsigned integer.

Example 1:
Input: n = 43261596
Output: 964176192

Example 2:
Input: n = 2147483644
Output: 1073741822
*/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        result = (result << 1) | (n & 1);
        n = n >>> 1;
    }
    return result >>> 0; // Ensure unsigned 32-bit integer
};

console.log(reverseBits(43261596)); // 964176192
console.log(reverseBits(2147483644)); // 1073741822

// node Grind169/ans/2-7-ans1.js
