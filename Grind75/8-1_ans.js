const { TreeNode } = require("./lib.js");

var kthSmallest = function (root, k) {
    let count = 0;
    let result = null;

    const inorder = (node) => {
        if (!node || result !== null) return;

        inorder(node.left);

        count++;
        if (count === k) {
            result = node.val;
            return;
        }

        inorder(node.right);
    };

    inorder(root);
    return result;
};

console.log(kthSmallest(TreeNode.fromArray([3, 1, 4, null, 2]), 1)); // 1
console.log(kthSmallest(TreeNode.fromArray([5, 3, 6, 2, 4, null, null, 1]), 3)); // 3
console.log(kthSmallest(TreeNode.fromArray([1]), 1)); // 1

// node Grind75/8-1_ans.js
