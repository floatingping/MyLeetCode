/*
863. All Nodes Distance K in Binary Tree
https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/
Difficulty: Medium | Suggested time: 25 mins

Given the root of a binary tree, a target node, and an integer k, return the
values of all nodes exactly k edges away from target. Return the values in any
order.

Example 1:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
Output: [7,4,1]

Example 2:
Input: root = [1], target = 1, k = 3
Output: []

Constraints:
- The number of nodes is in the range [1, 500].
- 0 <= Node.val <= 500
- All Node.val values are unique.
- target is a node in the tree.
- 0 <= k <= 1000
*/

/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {

};

const distanceRoot = { val: 3, left: { val: 5, left: { val: 6 }, right: { val: 2, left: { val: 7 }, right: { val: 4 } } }, right: { val: 1, left: { val: 0 }, right: { val: 8 } } };
console.log(distanceK(distanceRoot, distanceRoot.left, 2)); // [7, 4, 1] in any order
console.log(distanceK({ val: 1 }, { val: 1 }, 3)); // []

// node Grind169/6-20.js
