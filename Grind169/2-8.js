/*
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

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {

};

console.log(isSubtree({ val: 3, left: { val: 4, left: { val: 1 }, right: { val: 2 } }, right: { val: 5 } }, { val: 4, left: { val: 1 }, right: { val: 2 } })); // true
console.log(isSubtree({ val: 3, left: { val: 4, left: { val: 1 }, right: { val: 2, left: { val: 0 } } }, right: { val: 5 } }, { val: 4, left: { val: 1 }, right: { val: 2 } })); // false

// node Grind169/2-8.js
