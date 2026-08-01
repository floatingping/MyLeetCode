/*
110. Balanced Binary Tree
Time Complexity: O(n) where n is number of nodes
Space Complexity: O(h) where h is height (recursion stack)
*/

const TreeNode = require('../libs/TreeNode');

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    // Helper function returns [isBalanced, height]
    const dfs = (node) => {
        if (!node) return [true, 0];
        
        const [leftBalanced, leftHeight] = dfs(node.left);
        if (!leftBalanced) return [false, 0];
        
        const [rightBalanced, rightHeight] = dfs(node.right);
        if (!rightBalanced) return [false, 0];
        
        const isNodeBalanced = Math.abs(leftHeight - rightHeight) <= 1;
        const height = Math.max(leftHeight, rightHeight) + 1;
        
        return [isNodeBalanced, height];
    };
    
    return dfs(root)[0];
};

let tree = TreeNode.fromArray([3, 9, 20, null, null, 15, 7]);
console.log(isBalanced(tree)); // true

tree = TreeNode.fromArray([1, 2, 2, 3, 3, null, null, 4, 4]);
console.log(isBalanced(tree)); // false

console.log(isBalanced(null)); // true

// node Grind169/ans/1-11-ans1.js
