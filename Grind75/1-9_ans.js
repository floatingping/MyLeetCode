var floodFill = function (image, sr, sc, color) {
    const originalColor = image[sr][sc];
    if (originalColor === color) return image;

    const dfs = (r, c) => {
        if (
            r < 0 ||
            r >= image.length ||
            c < 0 ||
            c >= image[0].length ||
            image[r][c] !== originalColor
        ) {
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

// node Grind75/1-9_ans.js
