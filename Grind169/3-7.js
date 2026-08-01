/*
Medium | 25 mins
3-7. Lowest Common Ancestor of a Binary Tree
LeetCode 236: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
Difficulty: Medium
Suggested time: 25 mins

Given a binary tree and two nodes p and q, return their lowest common ancestor
(LCA). The LCA is the lowest node in the tree that has both p and q as
descendants. A node can be a descendant of itself.

Example 1:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3

Example 2:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5

Constraints:
- The number of nodes in the tree is in [2, 10^5].
- -10^9 <= Node.val <= 10^9
- All Node.val values are unique.
- p and q are different nodes that exist in the tree.
*/

/** @typedef {{ val: number, left: TreeNode|null, right: TreeNode|null }} TreeNode */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {

};

const lcaRoot = {
	val: 3,
	left: { val: 5, left: { val: 6, left: null, right: null }, right: { val: 2, left: { val: 7, left: null, right: null }, right: { val: 4, left: null, right: null } } },
	right: { val: 1, left: { val: 0, left: null, right: null }, right: { val: 8, left: null, right: null } }
};
console.log(lowestCommonAncestor(lcaRoot, lcaRoot.left, lcaRoot.right)?.val); // 3
console.log(lowestCommonAncestor(lcaRoot, lcaRoot.left, lcaRoot.left.right.right)?.val); // 5

// node Grind169/3-7.js
