var largestRectangleArea = function (heights) {
    const stack = [];
    let maxArea = 0;
    
    for (let i = 0; i < heights.length; i++) {
        let start = i;
        
        while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
            const [index, height] = stack.pop();
            const area = height * (i - index);
            maxArea = Math.max(maxArea, area);
            start = index;
        }
        
        if (heights[i] > 0) {
            stack.push([start, heights[i]]);
        }
    }
    
    for (const [index, height] of stack) {
        const area = height * (heights.length - index);
        maxArea = Math.max(maxArea, area);
    }
    
    return maxArea;
};

console.log(largestRectangleArea([2,1,5,6,2,3]));    // 10
console.log(largestRectangleArea([2,1,2]));           // 2
console.log(largestRectangleArea([0,9]));             // 9
