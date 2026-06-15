var spiralOrder = function (matrix) {
    const result = [];
    let top = 0,
        bottom = matrix.length - 1;
    let left = 0,
        right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // Traverse right
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        // Traverse down
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        // Traverse left
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        // Traverse up
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
};

console.log(
    spiralOrder([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ])
); // [1,2,3,6,9,8,7,4,5]
console.log(
    spiralOrder([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12]
    ])
); // [1,2,3,4,8,12,11,10,9,5,6,7]
console.log(spiralOrder([[1]])); // [1]

// node Grind75/6-4_ans.js
