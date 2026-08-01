/*
Medium | 20 mins
179. Largest Number
https://leetcode.com/problems/largest-number/

Given a list of non-negative integers, arrange them to form the largest
possible number and return it as a string.

Strategy: Custom Sort
- Use custom comparator: for numbers a and b, compare (a+b) vs (b+a)
- If (ab > ba), then a should come before b
- Handle edge case: all zeros
*/

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    // Convert to strings
    const strNums = nums.map(num => String(num));
    
    // Custom sort: compare concatenations
    strNums.sort((a, b) => {
        const ab = a + b;
        const ba = b + a;
        if (ab > ba) return -1;
        if (ab < ba) return 1;
        return 0;
    });
    
    // Handle case where largest number is 0
    if (strNums[0] === '0') {
        return '0';
    }
    
    return strNums.join('');
};

console.log(largestNumber([10, 2])); // "210"
console.log(largestNumber([3, 30, 34, 5, 9])); // "9534330"

// node Grind169/ans/6-12-ans1.js
