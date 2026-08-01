const TreeNode = require('../libs/TreeNode');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0;
    
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

let tree = TreeNode.fromArray([3, 9, 20, null, null, 15, 7]);
console.log(maxDepth(tree)); // 3

tree = TreeNode.fromArray([1, null, 2]);
console.log(maxDepth(tree)); // 2

console.log(maxDepth(null)); // 0

// node Grind169/ans/1-23-ans1.js
