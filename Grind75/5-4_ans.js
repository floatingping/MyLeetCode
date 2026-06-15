var merge = function (intervals) {
    if (intervals.length <= 1) return intervals;

    intervals.sort((a, b) => a[0] - b[0]);

    const result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const last = result[result.length - 1];
        const current = intervals[i];

        if (current[0] <= last[1]) {
            last[1] = Math.max(last[1], current[1]);
        } else {
            result.push(current);
        }
    }

    return result;
};

console.log(
    merge([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18]
    ])
); // [[1,6],[8,10],[15,18]]
console.log(
    merge([
        [1, 4],
        [4, 5]
    ])
); // [[1,5]]
console.log(
    merge([
        [1, 2],
        [3, 5],
        [4, 9]
    ])
); // [[1,2],[3,9]]

// node Grind75/5-4_ans.js
