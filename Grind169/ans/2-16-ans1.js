/*
Medium | 20 mins
102. Binary Tree Level Order Traversal
https://leetcode.com/problems/binary-tree-level-order-traversal/

Given the root of a binary tree, return its node values level by level from left to right.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:
Input: root = [1]
Output: [[1]]
*/

const TreeNode = require('../libs/TreeNode');

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        const levelValues = [];
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            levelValues.push(node.val);
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(levelValues);
    }
    
    return result;
};

let tree = TreeNode.fromArray([3, 9, 20, null, null, 15, 7]);
console.log(levelOrder(tree)); // [[3], [9, 20], [15, 7]]

tree = TreeNode.fromArray([1]);
console.log(levelOrder(tree)); // [[1]]

// node Grind169/ans/2-16-ans1.js
