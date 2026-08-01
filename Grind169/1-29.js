/*
Easy | 20 mins
100. Same Tree
https://leetcode.com/problems/same-tree/

Given the roots of two binary trees p and q, return true when they have the same structure and corresponding nodes have equal values.

Example 1:

Input: p = [1,2,3], q = [1,2,3]
Output: true
Explanation: Both trees have equal values in the same positions.

Example 2:

Input: p = [1,2], q = [1,null,2]
Output: false

Example 3:

Input: p = [1,2,1], q = [1,1,2]
Output: false

Constraints:

The number of nodes in both trees is in the range [0, 100].
-10^4 <= Node.val <= 10^4
*/

const TreeNode = require('./libs/TreeNode');

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {



};

let tree1 = TreeNode.fromArray([1, 2, 3]);
let tree2 = TreeNode.fromArray([1, 2, 3]);
console.log(isSameTree(tree1, tree2)); // true

tree1 = TreeNode.fromArray([1, 2]);
tree2 = TreeNode.fromArray([1, null, 2]);
console.log(isSameTree(tree1, tree2)); // false

tree1 = TreeNode.fromArray([1, 2, 1]);
tree2 = TreeNode.fromArray([1, 1, 2]);
console.log(isSameTree(tree1, tree2)); // false


// node Grind169/1-29.js
