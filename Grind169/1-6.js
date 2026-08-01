/*
Easy | 15 mins
226. Invert Binary Tree
https://leetcode.com/problems/invert-binary-tree/

Given the root of a binary tree, invert the tree and return its root. Inversion swaps the left and right child of every node.

Example 1:

Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
Explanation: Every node's children are exchanged.

Example 2:

Input: root = [2,1,3]
Output: [2,3,1]

Example 3:

Input: root = []
Output: []

Constraints:

The number of nodes is in the range [0, 100].
-100 <= Node.val <= 100
*/

const TreeNode = require('./libs/TreeNode');

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {



};

let tree = TreeNode.fromArray([4, 2, 7, 1, 3, 6, 9]);
console.log(TreeNode.toArray(invertTree(tree))); // [4, 7, 2, 9, 6, 3, 1]

tree = TreeNode.fromArray([2, 1, 3]);
console.log(TreeNode.toArray(invertTree(tree))); // [2, 3, 1]

console.log(invertTree(null)); // null


// node Grind169/1-6.js
