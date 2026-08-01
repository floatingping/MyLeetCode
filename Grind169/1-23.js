/*
Easy | 15 mins
104. Maximum Depth of Binary Tree
https://leetcode.com/problems/maximum-depth-of-binary-tree/

Given the root of a binary tree, return its maximum depth, the number of nodes on the longest path from the root to a leaf.

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 3
Explanation: A longest root-to-leaf path has three nodes.

Example 2:

Input: root = [1,null,2]
Output: 2

Constraints:

The number of nodes is in the range [0, 10^4].
-100 <= Node.val <= 100
*/

const TreeNode = require('./libs/TreeNode');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {



};

let tree = TreeNode.fromArray([3, 9, 20, null, null, 15, 7]);
console.log(maxDepth(tree)); // 3

tree = TreeNode.fromArray([1, null, 2]);
console.log(maxDepth(tree)); // 2

console.log(maxDepth(null)); // 0


// node Grind169/1-23.js
