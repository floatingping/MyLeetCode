/*
Easy | 20 mins
235. Lowest Common Ancestor of a Binary Search Tree
https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

Given a binary search tree and two nodes p and q in that tree, return their lowest common ancestor: the lowest node that has both p and q as descendants.

Example 1:

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: Nodes 2 and 8 lie in different subtrees of node 6.

Example 2:

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: A node can be an ancestor of itself.

Constraints:

The number of nodes is in the range [2, 10^5].
-10^9 <= Node.val <= 10^9
All Node.val values are unique.
p and q are distinct nodes in root.
*/

const TreeNode = require('./libs/TreeNode');

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {


};

let tree = TreeNode.fromArray([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
console.log(lowestCommonAncestor(tree, TreeNode.findNode(tree, 2), TreeNode.findNode(tree, 8)).val); // 6

tree = TreeNode.fromArray([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
console.log(lowestCommonAncestor(tree, TreeNode.findNode(tree, 2), TreeNode.findNode(tree, 4)).val); // 2

tree = TreeNode.fromArray([2, 1]);
console.log(lowestCommonAncestor(tree, TreeNode.findNode(tree, 2), TreeNode.findNode(tree, 1)).val); // 2


// node Grind169/1-10.js
