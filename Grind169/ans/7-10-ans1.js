/*
Trapping Rain Water - Dynamic Programming
Time Complexity: O(n)
Space Complexity: O(n)
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    if (height.length < 3) return 0;

    // Calculate left max for each position
    const leftMax = new Array(height.length);
    leftMax[0] = height[0];
    for (let i = 1; i < height.length; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    // Calculate right max for each position
    const rightMax = new Array(height.length);
    rightMax[height.length - 1] = height[height.length - 1];
    for (let i = height.length - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    // Calculate trapped water
    let water = 0;
    for (let i = 0; i < height.length; i++) {
        const minHeight = Math.min(leftMax[i], rightMax[i]);
        water += minHeight - height[i];
    }

    return water;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(trap([4, 2, 0, 3, 2, 5])); // 9

// node Grind169/ans/7-10-ans1.js
