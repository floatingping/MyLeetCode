/*
Hard | 40 mins
7-9. Serialize and Deserialize Binary Tree
Difficulty: Hard
Suggested time: 40 mins

297. Serialize and Deserialize Binary Tree
https://leetcode.com/problems/serialize-and-deserialize-binary-tree/

Example:
Input: root = [1, 2, 3, null, null, 4, 5]
Output: [1, 2, 3, null, null, 4, 5]
Explanation: The tree is serialized and then deserialized without changing
its structure.
*/

const TreeNode = require('./libs/TreeNode');

/**
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {

};

/**
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {

};

const root = TreeNode.fromArray([1, 2, 3, null, null, 4, 5]);
const data = serialize(root);
console.log(TreeNode.toArray(deserialize(data))); // [1, 2, 3, null, null, 4, 5]

// node Grind169/7-9.js
