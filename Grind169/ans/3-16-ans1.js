/*
Medium | 20 mins
3-16. Binary Tree Right Side View
LeetCode 199: https://leetcode.com/problems/binary-tree-right-side-view/
Difficulty: Medium
Suggested time: 20 mins

Given the root of a binary tree, imagine looking at it from the right side.
Return the values of the nodes visible from top to bottom.
*/

const TreeNode = require('../libs/TreeNode');

/**
 * @param {TreeNode|null} root
 * @return {number[]}
 */
var rightSideView = function (root) {
	if (!root) {
		return [];
	}
	
	const result = [];
	const queue = [root];
	
	while (queue.length > 0) {
		const levelSize = queue.length;
		
		for (let i = 0; i < levelSize; i++) {
			const node = queue.shift();
			
			// If it's the last node of this level, add it to result
			if (i === levelSize - 1) {
				result.push(node.val);
			}
			
			if (node.left) {
				queue.push(node.left);
			}
			if (node.right) {
				queue.push(node.right);
			}
		}
	}
	
	return result;
};

let tree = TreeNode.fromArray([1, 2, 3, null, 5, null, 4]);
console.log(rightSideView(tree)); // [1, 3, 4]

tree = TreeNode.fromArray([1, null, 3]);
console.log(rightSideView(tree)); // [1, 3]

console.log(rightSideView(null)); // []

// node Grind169/ans/3-16-ans1.js
