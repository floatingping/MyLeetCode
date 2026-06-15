const { TreeNode } = require("./lib.js");

var isBalanced = function (root) {
    const checkHeight = (node) => {
        if (!node) return 0;

        const leftHeight = checkHeight(node.left);
        if (leftHeight === -1) return -1;

        const rightHeight = checkHeight(node.right);
        if (rightHeight === -1) return -1;

        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }

        return Math.max(leftHeight, rightHeight) + 1;
    };

    return checkHeight(root) !== -1;
};

console.log(isBalanced(TreeNode.fromArray([3, 9, 20, null, null, 15, 7]))); // true
console.log(isBalanced(TreeNode.fromArray([1, 2, 2, 3, 3, null, null, 4, 4]))); // false
console.log(isBalanced(TreeNode.fromArray([]))); // true

// node Grind75/1-11_ans.js
