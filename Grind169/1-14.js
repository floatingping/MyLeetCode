/*
278. First Bad Version
https://leetcode.com/problems/first-bad-version/

Versions 1 through n are ordered, and once a version is bad, every later version is also bad. Using the provided isBadVersion(version) API, return the first bad version.

Example 1:

Input: n = 5, bad = 4
Output: 4
Explanation: Versions 4 and 5 are bad, so 4 is the first bad version.

Example 2:

Input: n = 1, bad = 1
Output: 1

Constraints:

1 <= bad <= n <= 2^31 - 1
*/

/**
 * @param {function(number): boolean} isBadVersion
 * @return {function(number): number}
 */
var solution = function (isBadVersion) {



};

console.log(solution((version) => version >= 4)(5)); // 4
console.log(solution((version) => version >= 1)(1)); // 1
console.log(solution((version) => version >= 7)(10)); // 7


// node Grind169/1-14.js
