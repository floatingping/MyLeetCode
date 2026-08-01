/*
Medium | 25 mins
73. Set Matrix Zeroes
https://leetcode.com/problems/set-matrix-zeroes/

Given an m x n matrix, if an element is 0, set its entire row and column to 0.
Modify in place.

Strategy: Use first row and column as markers
- Traverse matrix, if element is 0, mark its row and column
- Use matrix[0][j] and matrix[i][0] to store markers
- Handle first row and column separately to avoid overwriting markers
*/

/**
 * @param {number[][]} matrix
 * @return {void}
 */
var setZeroes = function (matrix) {
    if (!matrix || matrix.length === 0) {
        return;
    }
    
    const m = matrix.length;
    const n = matrix[0].length;
    let firstRowZero = false;
    let firstColZero = false;
    
    // Check if first row and first column need to be zeroed
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            firstColZero = true;
            break;
        }
    }
    
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) {
            firstRowZero = true;
            break;
        }
    }
    
    // Mark zeros in first row and column
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    
    // Set rows to zero
    for (let i = 1; i < m; i++) {
        if (matrix[i][0] === 0) {
            for (let j = 1; j < n; j++) {
                matrix[i][j] = 0;
            }
        }
    }
    
    // Set columns to zero
    for (let j = 1; j < n; j++) {
        if (matrix[0][j] === 0) {
            for (let i = 1; i < m; i++) {
                matrix[i][j] = 0;
            }
        }
    }
    
    // Handle first row
    if (firstRowZero) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }
    
    // Handle first column
    if (firstColZero) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
};

const zeroMatrixExample = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
setZeroes(zeroMatrixExample);
console.log(zeroMatrixExample); // [[1, 0, 1], [0, 0, 0], [1, 0, 1]]

// node Grind169/ans/6-16-ans1.js
