const { TreeNode } = require('./lib.js');

var isValidBST = function (root) {
    const helper = (node, min, max) => {
        if (!node) return true;
        
        if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
            return false;
        }
        
        return helper(node.left, min, node.val) && helper(node.right, node.val, max);
    };
    
    return helper(root, null, null);
};

console.log(isValidBST(TreeNode.fromArray([2, 1, 3])));           // true
console.log(isValidBST(TreeNode.fromArray([5, 1, 4, null, null, 3, 6]))); // false
console.log(isValidBST(TreeNode.fromArray([1])));                 // true
console.log(isValidBST(TreeNode.fromArray([1, 2])));              // false
