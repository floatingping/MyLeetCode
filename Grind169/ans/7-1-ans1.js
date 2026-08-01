/*
3Sum Closest - Two Pointer + Sorting
Time Complexity: O(n^2)
Space Complexity: O(1)
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let closestSum = nums[0] + nums[1] + nums[2];
    let minDiff = Math.abs(closestSum - target);

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            const diff = Math.abs(sum - target);

            if (diff < minDiff) {
                minDiff = diff;
                closestSum = sum;
            }

            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                return sum;
            }
        }
    }

    return closestSum;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1)); // 2
console.log(threeSumClosest([0, 0, 0], 1)); // 0

// node Grind169/ans/7-1-ans1.js
