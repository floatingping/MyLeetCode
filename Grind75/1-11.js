/*
11. Balanced Binary Tree
https://leetcode.com/problems/balanced-binary-tree/

Given a binary tree, determine if it is height-balanced.

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: true

Example 2:
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

Example 3:
Input: root = []
Output: true

Constraints:
The number of nodes in the tree is in the range [0, 5000].
-104 <= Node.val <= 104
*/

const { TreeNode } = require('./lib.js');

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {


};

console.log(isBalanced(TreeNode.fromArray([3,9,20,null,null,15,7]))); // true
console.log(isBalanced(TreeNode.fromArray([1,2,2,3,3,null,null,4,4]))); // false
console.log(isBalanced(TreeNode.fromArray([]))); // true

// node Grind75/2-1.js
