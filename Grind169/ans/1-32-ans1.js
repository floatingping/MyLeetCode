/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let result = 0;
    
    // XOR has the property: a ^ a = 0, a ^ 0 = a
    // So XORing all numbers will cancel out duplicates and leave the single number
    for (const num of nums) {
        result ^= num;
    }
    
    return result;
};

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1])); // 1

// node Grind169/ans/1-32-ans1.js
