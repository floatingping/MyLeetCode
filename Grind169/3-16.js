/*
3-16. Binary Tree Right Side View
LeetCode 199: https://leetcode.com/problems/binary-tree-right-side-view/
Difficulty: Medium
Suggested time: 20 mins

Given the root of a binary tree, imagine looking at it from the right side.
Return the values of the nodes visible from top to bottom.

Example 1:
Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]

Example 2:
Input: root = [1,null,3]
Output: [1,3]

Example 3:
Input: root = []
Output: []

Constraints:
- The number of nodes in the tree is in [0, 100].
- -100 <= Node.val <= 100
*/

/** @typedef {{ val: number, left: TreeNode|null, right: TreeNode|null }} TreeNode */

/**
 * @param {TreeNode|null} root
 * @return {number[]}
 */
var rightSideView = function (root) {

};

const rightViewRoot = {
	val: 1,
	left: { val: 2, left: null, right: { val: 5, left: null, right: null } },
	right: { val: 3, left: null, right: { val: 4, left: null, right: null } }
};
console.log(rightSideView(rightViewRoot)); // [1, 3, 4]
console.log(rightSideView({ val: 1, left: null, right: { val: 3, left: null, right: null } })); // [1, 3]
console.log(rightSideView(null)); // []

// node Grind169/3-16.js
