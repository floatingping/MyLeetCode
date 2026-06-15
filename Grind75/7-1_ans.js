var maxArea = function (height) {
    let maxWater = 0;
    let left = 0, right = height.length - 1;
    
    while (left < right) {
        const width = right - left;
        const h = Math.min(height[left], height[right]);
        const area = width * h;
        maxWater = Math.max(maxWater, area);
        
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxWater;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));    // 49
console.log(maxArea([1,1]));                   // 1
console.log(maxArea([2,3,4,5,18,17,6]));      // 17

// node Grind75/7-1_ans.js
