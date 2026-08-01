/*
Largest Rectangle in Histogram - Stack
Time Complexity: O(n)
Space Complexity: O(n)
*/

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    const stack = [];
    let maxArea = 0;

    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
            const h = heights[stack.pop()];
            const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, h * w);
        }
        stack.push(i);
    }

    while (stack.length > 0) {
        const h = heights[stack.pop()];
        const w = stack.length === 0 ? heights.length : heights.length - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, h * w);
    }

    return maxArea;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); // 10
console.log(largestRectangleArea([2, 4])); // 4

// node Grind169/ans/7-16-ans1.js
