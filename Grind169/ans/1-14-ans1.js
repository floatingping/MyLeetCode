/*
278. First Bad Version - Binary Search
Time Complexity: O(log n)
Space Complexity: O(1)
*/

/**
 * @param {function(number): boolean} isBadVersion
 * @return {function(number): number}
 */
var solution = function (isBadVersion) {
    return function (n) {
        let left = 1;
        let right = n;
        
        while (left < right) {
            const mid = Math.floor(left + (right - left) / 2);
            
            if (isBadVersion(mid)) {
                right = mid;  // mid could be the first bad version
            } else {
                left = mid + 1;  // first bad version is after mid
            }
        }
        
        return left;
    };
};

console.log(solution((version) => version >= 4)(5)); // 4
console.log(solution((version) => version >= 1)(1)); // 1
console.log(solution((version) => version >= 7)(10)); // 7

// node Grind169/ans/1-14-ans1.js
