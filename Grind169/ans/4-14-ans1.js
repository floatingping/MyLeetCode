/*
Medium | 30 mins
4-14. Maximum Product Subarray
152. Maximum Product Subarray
https://leetcode.com/problems/maximum-product-subarray/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
	if (nums.length === 0) return 0;
	
	let maxProd = nums[0];
	let minProd = nums[0];
	let result = nums[0];
	
	for (let i = 1; i < nums.length; i++) {
		const num = nums[i];
		
		// Store max for swapping
		const temp = maxProd;
		
		// Update maxProd - take max of (current, current * maxProd, current * minProd)
		maxProd = Math.max(num, num * maxProd, num * minProd);
		
		// Update minProd - take min of (current, current * temp, current * minProd)
		minProd = Math.min(num, num * temp, num * minProd);
		
		// Update overall result
		result = Math.max(result, maxProd);
	}
	
	return result;
};

console.log(maxProduct([2, 3, -2, 4])); // 6
console.log(maxProduct([-2, 0, -1])); // 0
console.log(maxProduct([-2, 3, -4])); // 24

// node Grind169/ans/4-14-ans1.js
