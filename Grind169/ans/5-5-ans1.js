/*
Medium | 25 mins
LeetCode #113. Path Sum II
https://leetcode.com/problems/path-sum-ii/

Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths whose node values sum to targetSum.
*/

const TreeNode = require('../libs/TreeNode');

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    const result = [];
    
    const dfs = (node, currentSum, path) => {
        if (!node) return;
        
        currentSum += node.val;
        path.push(node.val);
        
        // Check if it's a leaf node and sum equals targetSum
        if (!node.left && !node.right && currentSum === targetSum) {
            result.push([...path]);
        }
        
        // Recursively check left and right subtrees
        if (node.left) dfs(node.left, currentSum, path);
        if (node.right) dfs(node.right, currentSum, path);
        
        path.pop();
    };
    
    dfs(root, 0, []);
    return result;
};

let tree = TreeNode.fromArray([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]);
console.log(pathSum(tree, 22)); // [[5, 4, 11, 2], [5, 8, 4, 5]]

tree = TreeNode.fromArray([1, 2, 3]);
console.log(pathSum(tree, 5)); // []

// node Grind169/ans/5-5-ans1.js
