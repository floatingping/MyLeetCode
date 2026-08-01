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
*/

const TreeNode = require('../libs/TreeNode');

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    const validate = (node, min, max) => {
        if (!node) return true;
        
        // Check if node value is within valid range
        if (node.val <= min || node.val >= max) return false;
        
        // Recursively validate left and right subtrees
        return validate(node.left, min, node.val) && validate(node.right, node.val, max);
    };
    
    return validate(root, -Infinity, Infinity);
};

let tree = TreeNode.fromArray([2, 1, 3]);
console.log(isValidBST(tree)); // true

tree = TreeNode.fromArray([5, 1, 4, null, null, 3, 6]);
console.log(isValidBST(tree)); // false

// node Grind169/ans/2-24-ans1.js
