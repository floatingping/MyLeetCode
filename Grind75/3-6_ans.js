const { TreeNode } = require("./lib.js");

var levelOrder = function (root) {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(currentLevel);
    }

    return result;
};

console.log(levelOrder(TreeNode.fromArray([3, 9, 20, null, null, 15, 7])));
// [[3],[9,20],[15,7]]
console.log(levelOrder(TreeNode.fromArray([1])));
// [[1]]
console.log(levelOrder(TreeNode.fromArray([])));
// []

// node Grind75/3-6_ans.js
