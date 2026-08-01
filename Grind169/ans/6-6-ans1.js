/*
Medium | 25 mins
48. Rotate Image
https://leetcode.com/problems/rotate-image/

Given an n x n matrix, rotate it 90 degrees clockwise in place.

Strategy: In-place rotation using two techniques
1. Transpose the matrix
2. Reverse each row
This rotates 90 degrees clockwise without extra space.
*/

/**
 * @param {number[][]} matrix
 * @return {void}
 */
var rotate = function (matrix) {
    const n = matrix.length;
    
    // Step 1: Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    
    // Step 2: Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
};

const rotationExample = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
rotate(rotationExample);
console.log(rotationExample); // [[7, 4, 1], [8, 5, 2], [9, 6, 3]]

// node Grind169/ans/6-6-ans1.js
