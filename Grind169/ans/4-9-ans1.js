/*
Medium | 25 mins
4-9. House Robber
198. House Robber
https://leetcode.com/problems/house-robber/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	if (nums.length === 0) return 0;
	if (nums.length === 1) return nums[0];
	
	// dp[i] represents max money we can rob up to house i
	let prev2 = nums[0]; // dp[0]
	let prev1 = Math.max(nums[0], nums[1]); // dp[1]
	
	for (let i = 2; i < nums.length; i++) {
		const current = Math.max(
			nums[i] + prev2, // Rob current house + max from i-2
			prev1             // Don't rob current house
		);
		prev2 = prev1;
		prev1 = current;
	}
	
	return prev1;
};

console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([2, 7, 9, 3, 1])); // 12
console.log(rob([2, 1, 1, 2])); // 4

// node Grind169/ans/4-9-ans1.js
