/*
Medium | 30 mins
LeetCode #658. Find K Closest Elements
https://leetcode.com/problems/find-k-closest-elements/

Given a sorted integer array arr, integers k and x, return the k closest integers to x in ascending order.
An integer a is closer than b if |a - x| < |b - x|, or if equal, a < b.
*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
    // Two pointers approach
    let left = 0;
    let right = arr.length - k;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        // Compare distances: element at mid vs element at mid+k
        // If closer to x, we should include mid
        // If closer to mid+k, we should exclude mid
        if (x - arr[mid] > arr[mid + k] - x) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return arr.slice(left, left + k);
};

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3)); // [1, 2, 3, 4]
console.log(findClosestElements([1, 2, 3, 4, 5], 4, -1)); // [1, 2, 3, 4]

// node Grind169/ans/5-12-ans1.js
