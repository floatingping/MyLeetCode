const { TreeNode } = require('./lib.js');

var lowestCommonAncestor = function(root, p, q) {
    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    } else if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q);
    } else {
        return root;
    }
};

let tree = TreeNode.fromArray([6,2,8,0,4,7,9,null,null,3,5]);
console.log(lowestCommonAncestor(tree, TreeNode.findNode(tree, 2), TreeNode.findNode(tree, 8)).val); // 6

tree = TreeNode.fromArray([6,2,8,0,4,7,9,null,null,3,5]);
console.log(lowestCommonAncestor(tree, TreeNode.findNode(tree, 2), TreeNode.findNode(tree, 4)).val); // 2

tree = TreeNode.fromArray([2,1]);
console.log(lowestCommonAncestor(tree, TreeNode.findNode(tree, 2), TreeNode.findNode(tree, 1)).val); // 2

// node Grind75/1-10_ans.js
