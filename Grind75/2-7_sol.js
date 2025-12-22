/**
 * LeetCode Grind 75 - 2-7 Solution
 * Add Binary (Easy - 15 mins)
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // 從右往左遍歷兩個字符串
    let result = '';
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    
    while (i >= 0 || j >= 0 || carry) {
        const digitA = i >= 0 ? parseInt(a[i]) : 0;
        const digitB = j >= 0 ? parseInt(b[j]) : 0;
        
        const sum = digitA + digitB + carry;
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
        
        i--;
        j--;
    }
    
    return result;
};

// 測試案例 1
console.log("=== Test Case 1 ===");
console.log('Expected: "100", Got:', '"' + addBinary("11", "1") + '"');

// 測試案例 2
console.log("\n=== Test Case 2 ===");
console.log('Expected: "10101", Got:', '"' + addBinary("1010", "1011") + '"');

// 測試案例 3
console.log("\n=== Test Case 3 ===");
console.log('Expected: "0", Got:', '"' + addBinary("0", "0") + '"');
