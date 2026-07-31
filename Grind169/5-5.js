/*
LeetCode #113. Path Sum II
https://leetcode.com/problems/path-sum-ii/

Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths whose node values sum to targetSum. A leaf has no children.

Example 1:
Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: [[5,4,11,2],[5,8,4,5]]

Example 2:
Input: root = [1,2,3], targetSum = 5
Output: []

Example 3:
Input: root = [1,2], targetSum = 0
Output: []

Constraints:
- The number of nodes is in the range [0, 5000].
- -1000 <= Node.val <= 1000
- -1000 <= targetSum <= 1000
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = val === undefined ? 0 : val;
 *   this.left = left === undefined ? null : left;
 *   this.right = right === undefined ? null : right;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {

};

const pathSumRoot = {
	val: 5,
	left: { val: 4, left: { val: 11, left: { val: 7 }, right: { val: 2 } } },
	right: { val: 8, left: { val: 13 }, right: { val: 4, left: { val: 5 }, right: { val: 1 } } }
};
console.log(pathSum(pathSumRoot, 22)); // [[5, 4, 11, 2], [5, 8, 4, 5]]
console.log(pathSum({ val: 1, left: { val: 2 }, right: { val: 3 } }, 5)); // []

// node Grind169/5-5.js
