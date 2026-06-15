var sortColors = function (nums) {
    let p0 = 0,
        p1 = 0,
        p2 = nums.length - 1;

    while (p1 <= p2) {
        if (nums[p1] === 0) {
            [nums[p0], nums[p1]] = [nums[p1], nums[p0]];
            p0++;
            p1++;
        } else if (nums[p1] === 2) {
            [nums[p1], nums[p2]] = [nums[p2], nums[p1]];
            p2--;
        } else {
            p1++;
        }
    }
};

// Test cases
let arr1 = [2, 0, 2, 1, 1, 0];
sortColors(arr1);
console.log(arr1); // [0,0,1,1,2,2]

let arr2 = [2, 0, 1];
sortColors(arr2);
console.log(arr2); // [0,1,2]

// node Grind75/5-8_ans.js
