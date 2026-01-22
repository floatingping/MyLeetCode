/*
23. Maximum Depth of Binary Tree
https://leetcode.com/problems/maximum-depth-of-binary-tree/

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2

Constraints:
The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100
*/

const { TreeNode } = require('./lib.js');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {


};

console.log(maxDepth(TreeNode.fromArray([3,9,20,null,null,15,7]))); // 3
console.log(maxDepth(TreeNode.fromArray([1,null,2]))); // 2
console.log(maxDepth(TreeNode.fromArray([]))); // 0

// node Grind75/2-10.js
