/*
437. Path Sum III
https://leetcode.com/problems/path-sum-iii/
Difficulty: Medium | Suggested time: 35 mins

Given the root of a binary tree and an integer targetSum, return the number of
paths whose values sum to targetSum. A path may start and end at any nodes but
must travel downward from parent to child.

Example 1:
Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
Output: 3

Example 2:
Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: 3

Constraints:
- The number of nodes is in the range [0, 1000].
- -10^9 <= Node.val, targetSum <= 10^9
*/

const TreeNode = require('./libs/TreeNode');

/**
 * @param {TreeNode|null} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {

};

let tree = TreeNode.fromArray([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]);
console.log(pathSum(tree, 8)); // 3

console.log(pathSum(null, 0)); // 0

// node Grind169/6-9.js
