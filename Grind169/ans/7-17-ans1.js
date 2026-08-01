/*
Binary Tree Maximum Path Sum - DFS
Time Complexity: O(n)
Space Complexity: O(h) where h is height
*/

const TreeNode = require('../libs/TreeNode');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
    let maxSum = -Infinity;

    function dfs(node) {
        if (!node) return -Infinity;

        const leftMax = dfs(node.left);
        const rightMax = dfs(node.right);

        // Max path sum through this node
        const pathThroughNode = node.val + Math.max(0, leftMax) + Math.max(0, rightMax);
        maxSum = Math.max(maxSum, pathThroughNode);

        // Max path sum going down from this node
        return node.val + Math.max(0, Math.max(leftMax, rightMax));
    }

    dfs(root);
    return maxSum;
};

let tree = TreeNode.fromArray([1, 2, 3]);
console.log(maxPathSum(tree)); // 6

tree = TreeNode.fromArray([-10, 9, 20, null, null, 15, 7]);
console.log(maxPathSum(tree)); // 42

// node Grind169/ans/7-17-ans1.js
