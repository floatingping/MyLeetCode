/*
Medium | 25 mins
3-14. Spiral Matrix
LeetCode 54: https://leetcode.com/problems/spiral-matrix/
Difficulty: Medium
Suggested time: 25 mins

Given an m x n matrix, return all elements of the matrix in spiral order.
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
	const result = [];
	
	if (!matrix || matrix.length === 0) {
		return result;
	}
	
	let top = 0;
	let bottom = matrix.length - 1;
	let left = 0;
	let right = matrix[0].length - 1;
	
	while (top <= bottom && left <= right) {
		// Traverse right
		for (let i = left; i <= right; i++) {
			result.push(matrix[top][i]);
		}
		top++;
		
		// Traverse down
		for (let i = top; i <= bottom; i++) {
			result.push(matrix[i][right]);
		}
		right--;
		
		// Traverse left (if there's still a row)
		if (top <= bottom) {
			for (let i = right; i >= left; i--) {
				result.push(matrix[bottom][i]);
			}
			bottom--;
		}
		
		// Traverse up (if there's still a column)
		if (left <= right) {
			for (let i = bottom; i >= top; i--) {
				result.push(matrix[i][left]);
			}
			left++;
		}
	}
	
	return result;
};

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [1, 2, 3, 6, 9, 8, 7, 4, 5]
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])); // [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]

// node Grind169/ans/3-14-ans1.js
