/*
102. Binary Tree Level Order Traversal
https://leetcode.com/problems/binary-tree-level-order-traversal/

Given the root of a binary tree, return its node values level by level from left to right.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:
Input: root = [1]
Output: [[1]]

Constraints:
- The number of nodes in the tree is in the range [0, 2000].
- -1000 <= Node.val <= 1000
*/

const TreeNode = require('./libs/TreeNode');

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {

};

let tree = TreeNode.fromArray([3, 9, 20, null, null, 15, 7]);
console.log(levelOrder(tree)); // [[3], [9, 20], [15, 7]]

tree = TreeNode.fromArray([1]);
console.log(levelOrder(tree)); // [[1]]

// node Grind169/2-16.js
