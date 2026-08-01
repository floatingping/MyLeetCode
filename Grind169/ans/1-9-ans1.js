/*
Flood Fill - DFS
Time Complexity: O(m * n)
Space Complexity: O(m * n)
*/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    const originalColor = image[sr][sc];
    
    if (originalColor === color) {
        return image;
    }

    const dfs = (r, c) => {
        if (r < 0 || r >= image.length || c < 0 || c >= image[0].length) {
            return;
        }
        if (image[r][c] !== originalColor) {
            return;
        }

        image[r][c] = color;
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    };

    dfs(sr, sc);
    return image;
};

console.log(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2)); // [[2, 2, 2], [2, 2, 0], [2, 0, 1]]
console.log(floodFill([[0, 0, 0], [0, 0, 0]], 0, 0, 0)); // [[0, 0, 0], [0, 0, 0]]
console.log(floodFill([[0]], 0, 0, 2)); // [[2]]

// node Grind169/ans/1-9-ans1.js
