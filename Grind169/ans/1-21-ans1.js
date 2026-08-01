const TreeNode = require('../libs/TreeNode');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let diameter = 0;
    
    function dfs(node) {
        if (!node) return 0;
        
        const left = dfs(node.left);
        const right = dfs(node.right);
        
        // Update diameter as the longest path through this node
        diameter = Math.max(diameter, left + right);
        
        // Return the height of the tree rooted at this node
        return Math.max(left, right) + 1;
    }
    
    dfs(root);
    return diameter;
};

let tree = TreeNode.fromArray([1, 2, 3, 4, 5]);
console.log(diameterOfBinaryTree(tree)); // 3

tree = TreeNode.fromArray([1, 2]);
console.log(diameterOfBinaryTree(tree)); // 1

tree = TreeNode.fromArray([1]);
console.log(diameterOfBinaryTree(tree)); // 0

// node Grind169/ans/1-21-ans1.js
