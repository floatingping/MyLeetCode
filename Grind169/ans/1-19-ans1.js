/*
169. Majority Element - Using HashMap
Time Complexity: O(n)
Space Complexity: O(n)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const countMap = new Map();
    const threshold = Math.floor(nums.length / 2);
    
    for (const num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
        
        // Early return if we found the majority element
        if (countMap.get(num) > threshold) {
            return num;
        }
    }
};

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
console.log(majorityElement([1])); // 1

// node Grind169/ans/1-19-ans1.js
