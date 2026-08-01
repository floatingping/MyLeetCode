/*
Medium | 30 mins
542. 01 Matrix
https://leetcode.com/problems/01-matrix/

Given an m x n binary matrix mat, return a matrix where each cell contains its distance to the nearest 0.

Example 1:
Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
Output: [[0,0,0],[0,1,0],[0,0,0]]

Example 2:
Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
Output: [[0,0,0],[0,1,0],[1,2,1]]
*/

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    const m = mat.length;
    const n = mat[0].length;
    const queue = [];
    
    // Initialize: add all 0s to queue
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j]);
            } else {
                mat[i][j] = -1; // Mark as unvisited
            }
        }
    }
    
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    
    while (queue.length > 0) {
        const [x, y] = queue.shift();
        
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            
            if (nx >= 0 && nx < m && ny >= 0 && ny < n && mat[nx][ny] === -1) {
                mat[nx][ny] = mat[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }
    
    return mat;
};

console.log(updateMatrix([[0, 0, 0], [0, 1, 0], [0, 0, 0]])); // [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
console.log(updateMatrix([[0, 0, 0], [0, 1, 0], [1, 1, 1]])); // [[0, 0, 0], [0, 1, 0], [1, 2, 1]]

// node Grind169/ans/2-12-ans1.js
