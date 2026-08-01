/*
Medium | 25 mins
3-7. Lowest Common Ancestor of a Binary Tree
LeetCode 236: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
Difficulty: Medium
Suggested time: 25 mins

Given a binary tree and two nodes p and q, return their lowest common ancestor
(LCA). The LCA is the lowest node in the tree that has both p and q as
descendants. A node can be a descendant of itself.
*/

/** @typedef {{ val: number, left: TreeNode|null, right: TreeNode|null }} TreeNode */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
	// Base cases
	if (!root || root === p || root === q) {
		return root;
	}
	
	// Look for p and q in left and right subtrees
	const left = lowestCommonAncestor(root.left, p, q);
	const right = lowestCommonAncestor(root.right, p, q);
	
	// If both p and q are found on different sides, root is the LCA
	if (left && right) {
		return root;
	}
	
	// If one side has the result, return it
	return left || right;
};

const lcaRoot = {
	val: 3,
	left: { val: 5, left: { val: 6, left: null, right: null }, right: { val: 2, left: { val: 7, left: null, right: null }, right: { val: 4, left: null, right: null } } },
	right: { val: 1, left: { val: 0, left: null, right: null }, right: { val: 8, left: null, right: null } }
};
console.log(lowestCommonAncestor(lcaRoot, lcaRoot.left, lcaRoot.right)?.val); // 3
console.log(lowestCommonAncestor(lcaRoot, lcaRoot.left, lcaRoot.left.right.right)?.val); // 5

// node Grind169/ans/3-7-ans1.js
