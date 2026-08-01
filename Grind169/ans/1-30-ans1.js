/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
    let count = 0;
    
    while (n > 0) {
        // n & 1 checks if the last bit is 1
        count += n & 1;
        // n >>> 1 performs unsigned right shift (right shift by 1)
        n = n >>> 1;
    }
    
    return count;
};

console.log(hammingWeight(0b1011)); // 3
console.log(hammingWeight(0b10000000)); // 1
console.log(hammingWeight(0b11111111111111111111111111111101)); // 31

// node Grind169/ans/1-30-ans1.js
