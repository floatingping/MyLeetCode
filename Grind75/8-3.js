/*
8-3. Serialize and Deserialize Binary Tree
https://leetcode.com/problems/serialize-and-deserialize-binary-tree/

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Clarification: The input tree is not necessarily a complete binary tree, and nodes are labeled from 0 to n - 1, meaning a tree might have missing nodes.

Example 1:

Input: root = [1,2,3,null,null,4,5]
Output: [1,2,3,null,null,4,5]

Example 2:

Input: root = []
Output: []

Constraints:

The number of nodes in the tree is in the range [0, 104].
-1000 <= Node.val <= 1000
*/

const { TreeNode } = require('./lib.js');

/**
 * Encodes a tree to a single string.
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {

};

/**
 * Decodes your encoded data to tree.
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {

};

// Test cases
let root = TreeNode.fromArray([1,2,3,null,null,4,5]);
let serialized = serialize(root);
let deserialized = deserialize(serialized);
console.log(TreeNode.toArray(deserialized));    // [1,2,3,null,null,4,5]

let empty = serialize(null);
console.log(deserialize(empty));                // null

// node Grind75/8-3.js
