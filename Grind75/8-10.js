/**
 * @param {number[]} heights
 * @return {number}
 */
// var largestRectangleArea = function (heights) {
//     let result = 0;

//     for (let l = 0; l < heights.length; l++) {
//         let minH = heights[l];
//         for (let r = l; r < heights.length; r++) {
//             minH = Math.min(minH, heights[r]);
//             const area = minH * (r - l + 1);
//             result = Math.max(result, area);
//         }
//     }

//     return result;
// };

var largestRectangleArea = function (heights) {
    let result = 0;
    const stack = [];
    heights.push(0);

    for (let i = 0; i < heights.length; i++) {

        while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
            const nowMaxHeightIdx = stack.pop();

            const width = stack.length > 0 ? (i - stack[stack.length - 1] - 1) : i;
            const area = width * heights[nowMaxHeightIdx];
            result = Math.max(result, area);
        }
        stack.push(i);
    }

    return result;
};





largestRectangleArea([2, 1, 5, 6, 2, 3]);
largestRectangleArea([2, 4]);







