const { TreeNode } = require('./lib.js');

var maxDepth = function(root) {
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

console.log(maxDepth(TreeNode.fromArray([3,9,20,null,null,15,7]))); // 3
console.log(maxDepth(TreeNode.fromArray([1,null,2]))); // 2
console.log(maxDepth(TreeNode.fromArray([]))); // 0

// node Grind75/2-10_ans.js
