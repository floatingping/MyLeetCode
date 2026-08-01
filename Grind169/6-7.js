/*
Medium | 25 mins
103. Binary Tree Zigzag Level Order Traversal
https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
Difficulty: Medium | Suggested time: 25 mins

Given the root of a binary tree, return its node values level by level,
alternating left-to-right and right-to-left order on successive levels.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]

Example 2:
Input: root = [1]
Output: [[1]]

Constraints:
- The number of nodes is in the range [0, 2000].
- -100 <= Node.val <= 100
*/

const TreeNode = require('./libs/TreeNode');

/**
 * @param {TreeNode|null} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {

};

let tree = TreeNode.fromArray([3, 9, 20, null, null, 15, 7]);
console.log(zigzagLevelOrder(tree)); // [[3], [20, 9], [15, 7]]

console.log(zigzagLevelOrder(null)); // []

// node Grind169/6-7.js
