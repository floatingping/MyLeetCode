/*
Medium | 25 mins
103. Binary Tree Zigzag Level Order Traversal
https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

Given the root of a binary tree, return its node values level by level,
alternating left-to-right and right-to-left order.

Strategy: BFS with direction flag
- Use queue for level order traversal
- Alternate direction for each level (left-to-right, then right-to-left)
- For right-to-left, reverse the level array or use deque with different insertion
*/

const TreeNode = require('../libs/TreeNode');

/**
 * @param {TreeNode|null} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    let leftToRight = true;
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        const level = [];
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            level.push(node.val);
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        if (!leftToRight) {
            level.reverse();
        }
        result.push(level);
        leftToRight = !leftToRight;
    }
    
    return result;
};

let tree = TreeNode.fromArray([3, 9, 20, null, null, 15, 7]);
console.log(zigzagLevelOrder(tree)); // [[3], [20, 9], [15, 7]]

console.log(zigzagLevelOrder(null)); // []

// node Grind169/ans/6-7-ans1.js
