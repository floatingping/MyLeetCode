/*
Medium | 25 mins
3-19. Construct Binary Tree from Preorder and Inorder Traversal
LeetCode 105: https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
Difficulty: Medium
Suggested time: 25 mins

Given preorder and inorder traversals of a binary tree with unique values,
construct and return the binary tree.
*/

/** @typedef {{ val: number, left: TreeNode|null, right: TreeNode|null }} TreeNode */

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode|null}
 */
var buildTree = function (preorder, inorder) {
	if (preorder.length === 0) {
		return null;
	}
	
	const inorderMap = new Map();
	for (let i = 0; i < inorder.length; i++) {
		inorderMap.set(inorder[i], i);
	}
	
	let preIdx = 0;
	
	const build = (inStart, inEnd) => {
		if (inStart > inEnd) {
			return null;
		}
		
		const rootVal = preorder[preIdx++];
		const root = { val: rootVal, left: null, right: null };
		
		const inIdx = inorderMap.get(rootVal);
		
		root.left = build(inStart, inIdx - 1);
		root.right = build(inIdx + 1, inEnd);
		
		return root;
	};
	
	return build(0, inorder.length - 1);
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])); // [3, 9, 20, null, null, 15, 7]
console.log(buildTree([-1], [-1])); // [-1]

// node Grind169/ans/3-19-ans1.js
