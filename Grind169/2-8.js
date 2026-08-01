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

Constraints:
- The number of nodes in root is in the range [1, 2000].
- The number of nodes in subRoot is in the range [1, 1000].
- -10^4 <= Node.val <= 10^4
*/

const TreeNode = require('./libs/TreeNode');

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {

};

let root = TreeNode.fromArray([3, 4, 5, 1, 2]);
let subRoot = TreeNode.fromArray([4, 1, 2]);
console.log(isSubtree(root, subRoot)); // true

root = TreeNode.fromArray([3, 4, 5, 1, 2, null, null, null, null, 0]);
subRoot = TreeNode.fromArray([4, 1, 2]);
console.log(isSubtree(root, subRoot)); // false

// node Grind169/2-8.js
