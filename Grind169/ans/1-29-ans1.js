const TreeNode = require('../libs/TreeNode');

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    // Both null
    if (!p && !q) return true;
    
    // One is null or values don't match
    if (!p || !q || p.val !== q.val) return false;
    
    // Recursively check left and right subtrees
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

let tree1 = TreeNode.fromArray([1, 2, 3]);
let tree2 = TreeNode.fromArray([1, 2, 3]);
console.log(isSameTree(tree1, tree2)); // true

tree1 = TreeNode.fromArray([1, 2]);
tree2 = TreeNode.fromArray([1, null, 2]);
console.log(isSameTree(tree1, tree2)); // false

tree1 = TreeNode.fromArray([1, 2, 1]);
tree2 = TreeNode.fromArray([1, 1, 2]);
console.log(isSameTree(tree1, tree2)); // false

// node Grind169/ans/1-29-ans1.js
