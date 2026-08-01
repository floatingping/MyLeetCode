/*
Medium | 20 mins
98. Validate Binary Search Tree
https://leetcode.com/problems/validate-binary-search-tree/

Given the root of a binary tree, return true if it is a valid binary search tree.

Example 1:
Input: root = [2,1,3]
Output: true

Example 2:
Input: root = [5,1,4,null,null,3,6]
Output: false

Constraints:
- The number of nodes in the tree is in the range [1, 10^4].
- -2^31 <= Node.val <= 2^31 - 1
*/

const TreeNode = require('./libs/TreeNode');

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {

};

let tree = TreeNode.fromArray([2, 1, 3]);
console.log(isValidBST(tree)); // true

tree = TreeNode.fromArray([5, 1, 4, null, null, 3, 6]);
console.log(isValidBST(tree)); // false

// node Grind169/2-24.js
