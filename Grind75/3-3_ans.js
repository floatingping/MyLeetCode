var kClosest = function (points, k) {
    const heap = [];

    for (let point of points) {
        const distance = point[0] * point[0] + point[1] * point[1];
        heap.push([distance, point]);
    }

    heap.sort((a, b) => a[0] - b[0]);

    return heap.slice(0, k).map((item) => item[1]);
};

console.log(
    kClosest(
        [
            [1, 3],
            [-2, 2]
        ],
        1
    )
); // [[-2,2]]
console.log(
    kClosest(
        [
            [3, 3],
            [5, -1],
            [-2, 4]
        ],
        2
    )
); // [[3,3],[-2,4]]

// node Grind75/3-3_ans.js
