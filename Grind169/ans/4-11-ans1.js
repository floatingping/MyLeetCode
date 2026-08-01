/*
Medium | 30 mins
4-11. Next Permutation
31. Next Permutation
https://leetcode.com/problems/next-permutation/
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
	const n = nums.length;
	
	// Step 1: Find the largest index i such that nums[i] < nums[i+1]
	let i = n - 2;
	while (i >= 0 && nums[i] >= nums[i + 1]) {
		i--;
	}
	
	// If no such index exists, reverse entire array (last permutation)
	if (i < 0) {
		nums.reverse();
		return;
	}
	
	// Step 2: Find the largest index j > i such that nums[i] < nums[j]
	let j = n - 1;
	while (j > i && nums[j] <= nums[i]) {
		j--;
	}
	
	// Step 3: Swap nums[i] and nums[j]
	[nums[i], nums[j]] = [nums[j], nums[i]];
	
	// Step 4: Reverse the suffix starting at nums[i+1]
	let left = i + 1;
	let right = n - 1;
	while (left < right) {
		[nums[left], nums[right]] = [nums[right], nums[left]];
		left++;
		right--;
	}
};

const firstPermutation = [1, 2, 3];
nextPermutation(firstPermutation);
console.log(firstPermutation); // [1, 3, 2]
const secondPermutation = [3, 2, 1];
nextPermutation(secondPermutation);
console.log(secondPermutation); // [1, 2, 3]
const thirdPermutation = [1, 1, 5];
nextPermutation(thirdPermutation);
console.log(thirdPermutation); // [1, 5, 1]

// node Grind169/ans/4-11-ans1.js
