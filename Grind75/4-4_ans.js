var productExceptSelf = function (nums) {
    const n = nums.length;
    const answer = new Array(n);
    
    // prefix[i] = product of all nums before index i
    const prefix = new Array(n);
    prefix[0] = 1;
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }
    
    // suffix[i] = product of all nums after index i
    const suffix = new Array(n);
    suffix[n - 1] = 1;
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }
    
    // answer[i] = prefix[i] * suffix[i]
    for (let i = 0; i < n; i++) {
        answer[i] = prefix[i] * suffix[i];
    }
    
    return answer;
};

console.log(productExceptSelf([1, 2, 3, 4]));        // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3]));   // [0,0,9,0,0]
console.log(productExceptSelf([2, 3, 4, 5]));        // [60,40,30,24]

// node Grind75/4-4_ans.js
