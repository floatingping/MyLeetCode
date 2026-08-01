/*
Easy | 20 mins
572. Subtree of Another Tree
https://leetcode.com/problems/subtree-of-another-tree/

Return true if subRoot is a subtree of root: a node in root whose entire subtree has the same structure and values as subRoot.

Example 1:
Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true

Example 2:
Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
Output: false
*/

const TreeNode = require('../libs/TreeNode');

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    const isSameTree = (p, q) => {
        if (!p && !q) return true;
        if (!p || !q) return false;
        if (p.val !== q.val) return false;
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    };
    
    const dfs = (root) => {
        if (!root) return false;
        if (isSameTree(root, subRoot)) return true;
        return dfs(root.left) || dfs(root.right);
    };
    
    return dfs(root);
};

let root = TreeNode.fromArray([3, 4, 5, 1, 2]);
let subRoot = TreeNode.fromArray([4, 1, 2]);
console.log(isSubtree(root, subRoot)); // true

root = TreeNode.fromArray([3, 4, 5, 1, 2, null, null, null, null, 0]);
subRoot = TreeNode.fromArray([4, 1, 2]);
console.log(isSubtree(root, subRoot)); // false

// node Grind169/ans/2-8-ans1.js
