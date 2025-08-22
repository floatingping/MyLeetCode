/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let l = 0;
    let r = matrix[0].length - 1;
    let t = 0;
    let b = matrix.length - 1;

    const result = [];
    while (l <= r && t <= b) {
        for (let j = l; j <= r; j++) {
            result.push(matrix[t][j]);
        }
        t++;

        for (let i = t; i <= b; i++) {
            result.push(matrix[i][r]);
        }
        r--;

        if (t > b) break;
        for (let j = r; j >= l; j--) {
            result.push(matrix[b][j]);
        }
        b--;

        if (l > r) break;
        for (let i = b; i >= t; i--) {
            result.push(matrix[i][l])
        }
        l++;
    }

    return result;
};

spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]); // [1, 2, 3, 6, 9, 8, 7, 4, 5]
spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]); // [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
spiralOrder([[1, 2], [3, 4]]); // [1, 2, 4, 3]
spiralOrder([[1]]); // [1]

