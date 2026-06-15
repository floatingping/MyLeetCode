const { TreeNode } = require("./lib.js");

var lowestCommonAncestor = function (root, p, q) {
    if (!root || root === p || root === q) {
        return root;
    }

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if (left && right) {
        return root;
    }

    return left ? left : right;
};

let root = TreeNode.fromArray([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
console.log(
    lowestCommonAncestor(
        root,
        TreeNode.findNode(root, 5),
        TreeNode.findNode(root, 1)
    ).val
); // 3

root = TreeNode.fromArray([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
console.log(
    lowestCommonAncestor(
        root,
        TreeNode.findNode(root, 5),
        TreeNode.findNode(root, 4)
    ).val
); // 5

// node Grind75/5-5_ans.js
