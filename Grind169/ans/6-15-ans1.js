/*
Medium | 25 mins
7. Reverse Integer
https://leetcode.com/problems/reverse-integer/

Given a signed 32-bit integer x, return x with its digits reversed.
Return 0 if the reversed value falls outside the signed 32-bit range.

Strategy: Mathematical digit extraction
- Extract digits one by one from the end
- Build reversed number by multiplying by 10 and adding digit
- Check for overflow before appending each digit
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const INT_MAX = Math.pow(2, 31) - 1; // 2147483647
    const INT_MIN = -Math.pow(2, 31); // -2147483648
    
    let result = 0;
    let num = x;
    
    while (num !== 0) {
        const digit = num % 10;
        num = Math.trunc(num / 10);
        
        // Check for overflow before appending digit
        if (result > INT_MAX / 10 || (result === INT_MAX / 10 && digit > 7)) {
            return 0; // Positive overflow
        }
        if (result < INT_MIN / 10 || (result === INT_MIN / 10 && digit < -8)) {
            return 0; // Negative overflow
        }
        
        result = result * 10 + digit;
    }
    
    return result;
};

// Alternative: String approach (simpler but still need overflow check)
var reverseString = function (x) {
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);
    
    const reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''));
    const result = x < 0 ? -reversed : reversed;
    
    if (result > INT_MAX || result < INT_MIN) {
        return 0;
    }
    
    return result;
};

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21

// node Grind169/ans/6-15-ans1.js
