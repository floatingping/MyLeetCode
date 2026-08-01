/*
Easy | 20 mins
101. Symmetric Tree
https://leetcode.com/problems/symmetric-tree/

Given the root of a binary tree, return true when it is a mirror of itself around its center.

Example 1:
Input: root = [1,2,2,3,4,4,3]
Output: true

Example 2:
Input: root = [1,2,2,null,3,null,3]
Output: false
*/

const TreeNode = require('../libs/TreeNode');

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    const isMirror = (left, right) => {
        if (!left && !right) return true;
        if (!left || !right) return false;
        if (left.val !== right.val) return false;
        return isMirror(left.left, right.right) && isMirror(left.right, right.left);
    };
    
    return isMirror(root.left, root.right);
};

let tree = TreeNode.fromArray([1, 2, 2, 3, 4, 4, 3]);
console.log(isSymmetric(tree)); // true

tree = TreeNode.fromArray([1, 2, 2, null, 3, null, 3]);
console.log(isSymmetric(tree)); // false

// node Grind169/ans/2-3-ans1.js
