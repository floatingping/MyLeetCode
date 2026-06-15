var updateMatrix = function (mat) {
    const m = mat.length;
    const n = mat[0].length;
    const queue = [];

    // Initialize queue with all 0s
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j]);
            } else {
                mat[i][j] = -1;
            }
        }
    }

    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ];

    while (queue.length > 0) {
        const [row, col] = queue.shift();

        for (let [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            if (
                newRow >= 0 &&
                newRow < m &&
                newCol >= 0 &&
                newCol < n &&
                mat[newRow][newCol] === -1
            ) {
                mat[newRow][newCol] = mat[row][col] + 1;
                queue.push([newRow, newCol]);
            }
        }
    }

    return mat;
};

console.log(
    updateMatrix([
        [0, 0, 0],
        [0, 1, 0],
        [1, 1, 1]
    ])
);
// [[0,0,0],[0,1,0],[1,2,1]]
console.log(
    updateMatrix([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
    ])
);
// [[0,0,0],[0,1,0],[0,0,0]]

// node Grind75/3-2_ans.js
