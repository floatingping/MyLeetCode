const { TreeNode } = require('./lib.js');

var buildTree = function (preorder, inorder) {
    if (preorder.length === 0) return null;
    
    const root = new TreeNode(preorder[0]);
    const inorderIndex = inorder.indexOf(preorder[0]);
    
    root.left = buildTree(preorder.slice(1, inorderIndex + 1), inorder.slice(0, inorderIndex));
    root.right = buildTree(preorder.slice(inorderIndex + 1), inorder.slice(inorderIndex + 1));
    
    return root;
};

console.log(TreeNode.toArray(buildTree([3,9,20,15,7], [9,3,15,20,7])));    // [3,9,20,null,null,15,7]
console.log(TreeNode.toArray(buildTree([-1], [-1])));                       // [-1]

// node Grind75/6-9_ans.js
