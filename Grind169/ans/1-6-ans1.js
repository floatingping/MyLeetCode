/*
Invert Binary Tree - Recursive
Time Complexity: O(n)
Space Complexity: O(h) where h is height
*/

const TreeNode = require('../libs/TreeNode');

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (!root) return null;

    const temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);

    return root;
};

let tree = TreeNode.fromArray([4, 2, 7, 1, 3, 6, 9]);
console.log(TreeNode.toArray(invertTree(tree))); // [4, 7, 2, 9, 6, 3, 1]

tree = TreeNode.fromArray([2, 1, 3]);
console.log(TreeNode.toArray(invertTree(tree))); // [2, 3, 1]

console.log(invertTree(null)); // null

// node Grind169/ans/1-6-ans1.js
