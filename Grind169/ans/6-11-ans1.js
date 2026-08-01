/*
Medium | 30 mins
74. Search a 2D Matrix
https://leetcode.com/problems/search-a-2d-matrix/

Given an m x n matrix where each row is sorted and first value of row is
greater than last value of previous row, search for a target value.

Strategy: Binary Search (treat matrix as 1D array)
- Treat matrix as a single sorted array
- Use binary search with index conversion: row = index / n, col = index % n
- Time complexity: O(log(m*n))
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    if (!matrix || matrix.length === 0) {
        return false;
    }
    
    const m = matrix.length;
    const n = matrix[0].length;
    let left = 0, right = m * n - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midValue = matrix[Math.floor(mid / n)][mid % n];
        
        if (midValue === target) {
            return true;
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return false;
};

// Alternative: Binary search on rows first, then columns
var searchMatrixAlt = function (matrix, target) {
    if (!matrix || matrix.length === 0) {
        return false;
    }
    
    const m = matrix.length;
    const n = matrix[0].length;
    
    // Binary search to find the row
    let top = 0, bottom = m - 1;
    let targetRow = -1;
    
    while (top <= bottom) {
        const mid = Math.floor((top + bottom) / 2);
        if (matrix[mid][0] <= target && target <= matrix[mid][n - 1]) {
            targetRow = mid;
            break;
        } else if (matrix[mid][0] > target) {
            bottom = mid - 1;
        } else {
            top = mid + 1;
        }
    }
    
    if (targetRow === -1) return false;
    
    // Binary search in the target row
    let left = 0, right = n - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (matrix[targetRow][mid] === target) {
            return true;
        } else if (matrix[targetRow][mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return false;
};

const matrixExample = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
console.log(searchMatrix(matrixExample, 3)); // true
console.log(searchMatrix(matrixExample, 13)); // false

// node Grind169/ans/6-11-ans1.js
