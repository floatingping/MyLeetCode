const { TreeNode } = require('./lib.js');

var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0;

    const getHeight = (node) => {
        if (!node) return 0;

        const leftHeight = getHeight(node.left);
        const rightHeight = getHeight(node.right);

        maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

        return Math.max(leftHeight, rightHeight) + 1;
    };

    getHeight(root);
    return maxDiameter;
};

console.log(diameterOfBinaryTree(TreeNode.fromArray([1,2,3,4,5]))); // 3
console.log(diameterOfBinaryTree(TreeNode.fromArray([1,2]))); // 1
console.log(diameterOfBinaryTree(TreeNode.fromArray([1]))); // 0

// node Grind75/2-8_ans.js
