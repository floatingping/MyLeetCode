

/*
https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/
230. Kth Smallest Element in a BST
Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

 

Example 1:


Input: root = [3,1,4,null,2], k = 1
Output: 1
Example 2:


Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3
 

Constraints:

The number of nodes in the tree is n.
1 <= k <= n <= 104
0 <= Node.val <= 104
*/








/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let counts = 0;
    let kthNode = null;

    inOrder(root);

    return kthNode?.val;

    function inOrder(node) {
        if (!node || kthNode) return;

        inOrder(node.left);
        counts++;
        if (counts === k) {
            kthNode = node;
            return;
        }
        inOrder(node.right);
    }
};