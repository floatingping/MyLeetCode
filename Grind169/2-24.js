/*
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

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {

};

console.log(isValidBST({ val: 2, left: { val: 1 }, right: { val: 3 } })); // true
console.log(isValidBST({ val: 5, left: { val: 1 }, right: { val: 4, left: { val: 3 }, right: { val: 6 } } })); // false

// node Grind169/2-24.js
