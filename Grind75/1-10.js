/*
10. Lowest Common Ancestor of a Binary Search Tree
https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia: "The lowest common ancestor of two nodes p and q in a tree T is the lowest node that has both p and q as descendants (where we allow a node to be a descendant of itself)."

Example 1:
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.

Example 2:
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

Constraints:
The number of nodes in the tree is in the range [2, 105].
-109 <= Node.val <= 109
All Node.val are unique.
p != q
p and q will exist in the BST.
*/

const { TreeNode } = require("./lib.js");

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {};

let tree = TreeNode.fromArray([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
console.log(
    lowestCommonAncestor(
        tree,
        TreeNode.findNode(tree, 2),
        TreeNode.findNode(tree, 8)
    ).val
); // 6

tree = TreeNode.fromArray([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
console.log(
    lowestCommonAncestor(
        tree,
        TreeNode.findNode(tree, 2),
        TreeNode.findNode(tree, 4)
    ).val
); // 2

tree = TreeNode.fromArray([2, 1]);
console.log(
    lowestCommonAncestor(
        tree,
        TreeNode.findNode(tree, 2),
        TreeNode.findNode(tree, 1)
    ).val
); // 2

// node Grind75/1-10.js
