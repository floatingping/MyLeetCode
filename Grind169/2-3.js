/*
101. Symmetric Tree
https://leetcode.com/problems/symmetric-tree/

Given the root of a binary tree, return true when it is a mirror of itself around its center.

Example 1:
Input: root = [1,2,2,3,4,4,3]
Output: true

Example 2:
Input: root = [1,2,2,null,3,null,3]
Output: false

Constraints:
- The number of nodes is in the range [1, 1000].
- -100 <= Node.val <= 100
*/

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {

};

console.log(isSymmetric({ val: 1, left: { val: 2, left: { val: 3 }, right: { val: 4 } }, right: { val: 2, left: { val: 4 }, right: { val: 3 } } })); // true
console.log(isSymmetric({ val: 1, left: { val: 2, right: { val: 3 } }, right: { val: 2, right: { val: 3 } } })); // false

// node Grind169/2-3.js
