/*
6. Invert Binary Tree
https://leetcode.com/problems/invert-binary-tree/

Given the root of a binary tree, invert the tree, and return its root.

Example 1:
Input: root = [2,1,3]
Output: [2,3,1]

Example 2:
Input: root = []
Output: []

Constraints:
The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
*/

const { TreeNode } = require("./lib.js");

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {};

console.log(TreeNode.toArray(invertTree(TreeNode.fromArray([2, 1, 3])))); // [2,3,1]
console.log(TreeNode.toArray(invertTree(TreeNode.fromArray([])))); // []
console.log(
    TreeNode.toArray(invertTree(TreeNode.fromArray([1, 2, 3, 4, 5, 6, 7])))
); // [1,3,2,7,6,5,4]

// node Grind75/1-6.js
