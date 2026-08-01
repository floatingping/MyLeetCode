/*
Medium | 25 mins
4-7. Kth Smallest Element in a BST
230. Kth Smallest Element in a BST
https://leetcode.com/problems/kth-smallest-element-in-a-bst/
*/

const TreeNode = require('../libs/TreeNode');

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
	let count = 0;
	let result = null;
	
	const inorder = (node) => {
		if (!node || result !== null) return;
		
		// Traverse left subtree
		inorder(node.left);
		
		// Process current node
		count++;
		if (count === k) {
			result = node.val;
			return;
		}
		
		// Traverse right subtree
		inorder(node.right);
	};
	
	inorder(root);
	return result;
};

let tree = TreeNode.fromArray([3, 1, 4, null, 2]);
console.log(kthSmallest(tree, 1)); // 1

tree = TreeNode.fromArray([5, 3, 6, 2, 4, null, null, 1]);
console.log(kthSmallest(tree, 3)); // 3

tree = TreeNode.fromArray([2, 1, 3]);
console.log(kthSmallest(tree, 2)); // 2

// node Grind169/ans/4-7-ans1.js
