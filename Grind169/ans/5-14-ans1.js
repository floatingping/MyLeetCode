/*
Medium | 30 mins
LeetCode #285. Inorder Successor in BST
https://leetcode.com/problems/inorder-successor-in-bst/

Given the root of a binary search tree and a node p in the tree, return p's inorder successor.
The successor is the node with the smallest key strictly greater than p.val; return null if none exists.
*/

const TreeNode = require('../libs/TreeNode');

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {
    let successor = null;
    
    while (root) {
        if (root.val > p.val) {
            // Successor might be here or further left
            successor = root;
            root = root.left;
        } else {
            // Need to look right
            root = root.right;
        }
    }
    
    return successor;
};

let tree = TreeNode.fromArray([2, 1, 3]);
let pNode = TreeNode.findNode(tree, 1);
console.log(inorderSuccessor(tree, pNode)?.val); // 2

tree = TreeNode.fromArray([5, 3, 6, 2, 4, null, null, 1]);
pNode = TreeNode.findNode(tree, 6);
console.log(inorderSuccessor(tree, pNode)); // null

// node Grind169/ans/5-14-ans1.js
