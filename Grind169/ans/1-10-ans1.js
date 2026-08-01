/*
Lowest Common Ancestor of a Binary Search Tree - Using BST Properties
Time Complexity: O(h) where h is height
Space Complexity: O(h)
*/

const TreeNode = require('../libs/TreeNode');

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    while (root) {
        if (root.val > p.val && root.val > q.val) {
            root = root.left;
        } else if (root.val < p.val && root.val < q.val) {
            root = root.right;
        } else {
            return root;
        }
    }
    return root;
};

let tree = TreeNode.fromArray([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
console.log(lowestCommonAncestor(tree, TreeNode.findNode(tree, 2), TreeNode.findNode(tree, 8)).val); // 6

tree = TreeNode.fromArray([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
console.log(lowestCommonAncestor(tree, TreeNode.findNode(tree, 2), TreeNode.findNode(tree, 4)).val); // 2

tree = TreeNode.fromArray([2, 1]);
console.log(lowestCommonAncestor(tree, TreeNode.findNode(tree, 2), TreeNode.findNode(tree, 1)).val); // 2

// node Grind169/ans/1-10-ans1.js
