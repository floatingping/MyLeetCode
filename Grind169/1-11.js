/*
Easy | 15 mins
110. Balanced Binary Tree
https://leetcode.com/problems/balanced-binary-tree/

Given a binary tree, return true when it is height-balanced. A height-balanced tree has left and right subtree heights that differ by at most one at every node.

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: true
Explanation: No node has subtrees whose heights differ by more than one.

Example 2:

Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

Example 3:

Input: root = []
Output: true

Constraints:

The number of nodes is in the range [0, 5000].
-10^4 <= Node.val <= 10^4
*/

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {



};

console.log(isBalanced([3, 9, 20, null, null, 15, 7])); // true
console.log(isBalanced([1, 2, 2, 3, 3, null, null, 4, 4])); // false
console.log(isBalanced(null)); // true


// node Grind169/1-11.js
