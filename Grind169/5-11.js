/*
Medium | 20 mins
LeetCode #662. Maximum Width of Binary Tree
https://leetcode.com/problems/maximum-width-of-binary-tree/

Given the root of a binary tree, return its maximum width. The width of a level is the distance between its leftmost and rightmost non-null nodes, including null nodes that would exist between them in a complete binary tree.

Example 1:
Input: root = [1,3,2,5,3,null,9]
Output: 4

Example 2:
Input: root = [1,3,2,5,null,null,9,6,null,7]
Output: 7

Example 3:
Input: root = [1,3,2,5]
Output: 2

Constraints:
- The number of nodes is in the range [1, 3000].
- -100 <= Node.val <= 100
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
 * @return {number}
 */
var widthOfBinaryTree = function (root) {

};

let tree = TreeNode.fromArray([1, 3, 2, 5, 3, null, 9]);
console.log(widthOfBinaryTree(tree)); // 4

tree = TreeNode.fromArray([1, 3, 2, 5, null, null, 9, 6, null, 7]);
console.log(widthOfBinaryTree(tree)); // 7

// node Grind169/5-11.js
