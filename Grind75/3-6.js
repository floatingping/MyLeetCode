/*
31. Binary Tree Level Order Traversal
https://leetcode.com/problems/binary-tree-level-order-traversal/

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:
Input: root = [1]
Output: [[1]]

Example 3:
Input: root = []
Output: []

Constraints:
The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000
*/

const { TreeNode } = require('./lib.js');

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {


};

console.log(levelOrder(TreeNode.fromArray([3,9,20,null,null,15,7]))); 
// [[3],[9,20],[15,7]]
console.log(levelOrder(TreeNode.fromArray([1]))); 
// [[1]]
console.log(levelOrder(TreeNode.fromArray([]))); 
// []

// node Grind75/3-6.js
