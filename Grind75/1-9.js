/*
9. Flood Fill
https://leetcode.com/problems/flood-fill/

An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill:
1. Begin with the starting pixel and change its color to color.
2. Perform the same process for each pixel in the image adjacent to the starting pixel with the same original color as the starting pixel.

The function should modify the image in-place and return it.

Example 1:
Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]

Example 2:
Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
Output: [[0,0,0],[0,0,0]]

Constraints:
m == image.length
n == image[i].length
1 <= m, n <= 50
0 <= image[i][j], color <= 104
0 <= sr < m
0 <= sc < n
*/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {};

console.log(
    floodFill(
        [
            [1, 1, 1],
            [1, 1, 0],
            [1, 0, 1]
        ],
        1,
        1,
        2
    )
); // [[2,2,2],[2,2,0],[2,0,1]]
console.log(
    floodFill(
        [
            [0, 0, 0],
            [0, 0, 0]
        ],
        0,
        0,
        0
    )
); // [[0,0,0],[0,0,0]]
console.log(
    floodFill(
        [
            [0, 0, 0],
            [0, 1, 1]
        ],
        1,
        1,
        1
    )
); // [[0,0,0],[0,1,1]]

// node Grind75/1-9.js
