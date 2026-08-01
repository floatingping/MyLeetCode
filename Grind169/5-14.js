/*
LeetCode #285. Inorder Successor in BST
https://leetcode.com/problems/inorder-successor-in-bst/

Given the root of a binary search tree and a node p in the tree, return p's inorder successor. The successor is the node with the smallest key strictly greater than p.val; return null if none exists.

Example 1:
Input: root = [2,1,3], p = 1
Output: 2

Example 2:
Input: root = [5,3,6,2,4,null,null,1], p = 6
Output: null

Constraints:
- The number of nodes is in the range [1, 10^4].
- -10^5 <= Node.val <= 10^5
- All node values are unique.
- p is a node in the tree.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = val === undefined ? 0 : val;
 *   this.left = left === undefined ? null : left;
 *   this.right = right === undefined ? null : right;
 * }
 */

const TreeNode = require('./libs/TreeNode');

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {

};

let tree = TreeNode.fromArray([2, 1, 3]);
let pNode = TreeNode.findNode(tree, 1);
console.log(inorderSuccessor(tree, pNode)?.val); // 2

tree = TreeNode.fromArray([5, 3, 6, 2, 4, null, null, 1]);
pNode = TreeNode.findNode(tree, 6);
console.log(inorderSuccessor(tree, pNode)); // null

// node Grind169/5-14.js
