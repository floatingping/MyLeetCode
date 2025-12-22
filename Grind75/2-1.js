/**
 * LeetCode Grind 75 - 2-1
 * First Bad Version (Easy - 20 mins)
 * 
 * You are a product manager and currently leading a team to develop a new product. 
 * Unfortunately, the latest version of your product fails the quality check. 
 * Since each version is developed based on the previous version, all the versions after a bad version are also bad.
 * 
 * Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one. 
 * You are given an API function isBadVersion(version) which returns whether version is bad. 
 * Determine the first bad version.
 * 
 * Example:
 * Input: n = 5, bad = 4
 * Output: 4
 * 
 * Explanation:
 *   call isBadVersion(3) -> false
 *   call isBadVersion(5) -> true
 *   call isBadVersion(4) -> true
 *   Then 4 is the first bad version.
 */

// Mock API - 實際 LeetCode 會提供
function isBadVersion(version) {
  const bad = 4; // 這個值會根據測試案例改變
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
        // TODO: 補充你的程式碼
    };
};

// 測試案例 1
console.log("=== Test Case 1 ===");
const solve1 = solution(isBadVersion);
// Mock: n = 5, bad version = 4
console.log("Expected: 4, Got:", solve1(5));

// 測試案例 2
console.log("\n=== Test Case 2 ===");
// Mock: 修改 isBadVersion 讓 bad = 1
function isBadVersion2(version) {
  return version >= 1;
}
const solve2 = solution(isBadVersion2);
console.log("Expected: 1, Got:", solve2(3));

// 測試案例 3
console.log("\n=== Test Case 3 ===");
// Mock: 修改 isBadVersion 讓 bad = 2043
function isBadVersion3(version) {
  return version >= 2043;
}
const solve3 = solution(isBadVersion3);
console.log("Expected: 2043, Got:", solve3(2150));
