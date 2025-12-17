/*
110. Balanced Binary Tree
Easy
Topics
premium lock icon
Companies
Given a binary tree, determine if it is height-balanced.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: true
Example 2:


Input: root = [1,2,2,3,3,null,null,4,4]
Output: false
Example 3:

Input: root = []
Output: true
 

Constraints:

The number of nodes in the tree is in the range [0, 5000].
-104 <= Node.val <= 104
*/


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


function isBalanced(root) {
    function checkBalance(node) {
        if (!node) return 0;
        const leftHeight = checkBalance(node.left);
        if (leftHeight === -1) return -1;
        const rightHeight = checkBalance(node.right);
        if (rightHeight === -1) return -1;
        if (Math.abs(leftHeight - rightHeight) > 1) return -1;
        return Math.max(leftHeight, rightHeight) + 1;
    }
    return checkBalance(root) !== -1;
}

// Example usage:
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);



console.log(isBalanced(root)); // true

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(2);
root2.left.left = new TreeNode(3);
root2.left.right = new TreeNode(3);
root2.left.left.left = new TreeNode(4);
root2.left.left.right = new TreeNode(4);
console.log(isBalanced(root2)); // false

const root3 = null;
console.log(isBalanced(root3)); // true
const root4 = new TreeNode(1);
console.log(isBalanced(root4)); // true
const root5 = new TreeNode(1);
root5.left = new TreeNode(2);
console.log(isBalanced(root5)); // true
const root6 = new TreeNode(1);
root6.left = new TreeNode(2);
root6.left.left = new TreeNode(3);
console.log(isBalanced(root6)); // false
