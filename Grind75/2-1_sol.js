/**
 * LeetCode Grind 75 - 2-1 Solution
 * First Bad Version (Easy - 20 mins)
 */

// Mock API
function isBadVersion(version) {
  const bad = 4;
  return version >= bad;
}

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // Binary Search 方法
        let left = 1, right = n;
        while (left < right) {
            const mid = Math.floor(left + (right - left) / 2);
            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    };
};

// 測試案例 1
console.log("=== Test Case 1 ===");
const solve1 = solution(isBadVersion);
console.log("Expected: 4, Got:", solve1(5));

// 測試案例 2
console.log("\n=== Test Case 2 ===");
function isBadVersion2(version) {
  return version >= 1;
}
const solve2 = solution(isBadVersion2);
console.log("Expected: 1, Got:", solve2(3));

// 測試案例 3
console.log("\n=== Test Case 3 ===");
function isBadVersion3(version) {
  return version >= 2043;
}
const solve3 = solution(isBadVersion3);
console.log("Expected: 2043, Got:", solve3(2150));
