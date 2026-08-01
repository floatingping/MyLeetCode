/*
Medium | 20 mins
4-19. Find the Duplicate Number
287. Find the Duplicate Number
https://leetcode.com/problems/find-the-duplicate-number/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
	// Floyd's Cycle Detection Algorithm (Tortoise and Hare)
	// Treat array as a linked list where value at index i points to index nums[i]
	
	// Phase 1: Find intersection point in cycle
	let slow = nums[0];
	let fast = nums[0];
	
	do {
		slow = nums[slow];
		fast = nums[nums[fast]];
	} while (slow !== fast);
	
	// Phase 2: Find entrance to cycle
	let ptr1 = nums[0];
	let ptr2 = slow;
	
	while (ptr1 !== ptr2) {
		ptr1 = nums[ptr1];
		ptr2 = nums[ptr2];
	}
	
	return ptr1;
};

console.log(findDuplicate([1, 3, 4, 2, 2])); // 2
console.log(findDuplicate([3, 1, 3, 4, 2])); // 3
console.log(findDuplicate([3, 3, 3, 3, 3])); // 3

// node Grind169/ans/4-19-ans1.js
