var canPartition = function (nums) {
    const sum = nums.reduce((a, b) => a + b, 0);
    
    if (sum % 2 !== 0) return false;
    
    const target = sum / 2;
    const dp = new Array(target + 1).fill(false);
    dp[0] = true;
    
    for (const num of nums) {
        for (let i = target; i >= num; i--) {
            dp[i] = dp[i] || dp[i - num];
        }
    }
    
    return dp[target];
};

console.log(canPartition([1,5,11,5]));    // true
console.log(canPartition([2,2,1,1]));     // false
console.log(canPartition([1,2,3,5]));     // false
console.log(canPartition([2,2,1,1]));     // false

// node Grind75/6-2_ans.js
