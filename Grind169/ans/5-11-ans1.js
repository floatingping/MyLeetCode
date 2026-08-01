/*
Medium | 20 mins
LeetCode #662. Maximum Width of Binary Tree
https://leetcode.com/problems/maximum-width-of-binary-tree/

Given the root of a binary tree, return its maximum width. The width of a level is the distance between
its leftmost and rightmost non-null nodes, including null nodes that would exist between them.
*/

const TreeNode = require('../libs/TreeNode');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
    if (!root) return 0;
    
    let maxWidth = 0;
    const queue = [[root, 0]]; // [node, index]
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        let leftmost = null;
        let rightmost = null;
        
        for (let i = 0; i < levelSize; i++) {
            const [node, index] = queue.shift();
            
            if (i === 0) leftmost = index;
            if (i === levelSize - 1) rightmost = index;
            
            if (node.left) {
                queue.push([node.left, index * 2]);
            }
            if (node.right) {
                queue.push([node.right, index * 2 + 1]);
            }
        }
        
        maxWidth = Math.max(maxWidth, rightmost - leftmost + 1);
    }
    
    return maxWidth;
};

let tree = TreeNode.fromArray([1, 3, 2, 5, 3, null, 9]);
console.log(widthOfBinaryTree(tree)); // 4

tree = TreeNode.fromArray([1, 3, 2, 5, null, null, 9, 6, null, 7]);
console.log(widthOfBinaryTree(tree)); // 7

// node Grind169/ans/5-11-ans1.js
