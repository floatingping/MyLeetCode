





/**
 * @param {number[]} height
 * @return {number}
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let l = 0;
    let r = height.length - 1;

    let lMax = 0;
    let rMax = 0;

    let result = 0;

    while (l < r) {
        if (height[l] < height[r]) {
            if (height[l] >= lMax) {
                lMax = height[l];
            } else {
                result += lMax - height[l];
            }
            l++;
        } else {
            if (height[r] >= rMax) {
                rMax = height[r];
            } else {
                result += rMax - height[r];
            }
            r--;
        }
    }

    return result;
};


console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); //6
console.log(trap([4, 2, 0, 3, 2, 5])); //9



