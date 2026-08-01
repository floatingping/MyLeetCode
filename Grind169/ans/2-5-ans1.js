/*
Easy | 15 mins
9. Palindrome Number
https://leetcode.com/problems/palindrome-number/

Given an integer x, return true if x reads the same forward and backward; otherwise, return false.

Example 1:
Input: x = 121
Output: true

Example 2:
Input: x = -121
Output: false
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;
    
    let original = x;
    let reversed = 0;
    
    while (x > 0) {
        reversed = reversed * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    
    return original === reversed;
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false

// node Grind169/ans/2-5-ans1.js
