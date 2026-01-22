const { TreeNode } = require('./lib.js');

var invertTree = function(root) {
    if (!root) return null;

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);

    return root;
};

console.log(TreeNode.toArray(invertTree(TreeNode.fromArray([2,1,3])))); // [2,3,1]
console.log(TreeNode.toArray(invertTree(TreeNode.fromArray([])))); // []
console.log(TreeNode.toArray(invertTree(TreeNode.fromArray([1,2,3,4,5,6,7])))); // [1,3,2,7,6,5,4]

// node Grind75/1-6_ans.js
