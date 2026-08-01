/*
Medium | 35 mins
437. Path Sum III
https://leetcode.com/problems/path-sum-iii/

Given the root of a binary tree and targetSum, return the number of paths
whose values sum to targetSum. Path can start and end at any nodes.

Strategy: DFS with HashMap prefix sum
- For each node, track path sum from root to current node
- Check if (currentSum - targetSum) exists in path sum map
- This represents a valid path ending at current node
- Use DFS to traverse all paths
*/

const TreeNode = require('../libs/TreeNode');

/**
 * @param {TreeNode|null} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    let count = 0;
    const pathSumMap = new Map();
    
    function dfs(node, currentSum) {
        if (!node) return;
        
        currentSum += node.val;
        
        // Check if path from some ancestor to current node sums to targetSum
        if (pathSumMap.has(currentSum - targetSum)) {
            count += pathSumMap.get(currentSum - targetSum);
        }
        
        // Add current path sum to map
        pathSumMap.set(currentSum, (pathSumMap.get(currentSum) || 0) + 1);
        
        // Traverse left and right subtrees
        dfs(node.left, currentSum);
        dfs(node.right, currentSum);
        
        // Backtrack: remove current sum from map
        pathSumMap.set(currentSum, pathSumMap.get(currentSum) - 1);
        if (pathSumMap.get(currentSum) === 0) {
            pathSumMap.delete(currentSum);
        }
    }
    
    // Initialize with 0 for root paths
    pathSumMap.set(0, 1);
    dfs(root, 0);
    
    return count;
};

let tree = TreeNode.fromArray([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]);
console.log(pathSum(tree, 8)); // 3

console.log(pathSum(null, 0)); // 0

// node Grind169/ans/6-9-ans1.js
