/*
Medium | 25 mins
3-19. Construct Binary Tree from Preorder and Inorder Traversal
LeetCode 105: https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
Difficulty: Medium
Suggested time: 25 mins

Given preorder and inorder traversals of a binary tree with unique values,
construct and return the binary tree.

Example 1:
Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]

Example 2:
Input: preorder = [-1], inorder = [-1]
Output: [-1]

Constraints:
- 1 <= preorder.length <= 3000
- inorder.length == preorder.length
- -3000 <= preorder[i], inorder[i] <= 3000
- preorder and inorder consist of unique values.
- Each value of inorder also appears in preorder.
*/

/** @typedef {{ val: number, left: TreeNode|null, right: TreeNode|null }} TreeNode */

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode|null}
 */
var buildTree = function (preorder, inorder) {

};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])); // [3, 9, 20, null, null, 15, 7]
console.log(buildTree([-1], [-1])); // [-1]

// node Grind169/3-19.js
