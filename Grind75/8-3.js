
/*
https://leetcode.com/problems/serialize-and-deserialize-binary-tree

297. Serialize and Deserialize Binary Tree

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.
*/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}



/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if (!root) return "[]";

    const q = [root];
    const result = [];

    while (q.length) {
        const node = q.shift();

        if (node) {
            result.push(node.val);
            q.push(node.left);
            q.push(node.right);
        } else {
            result.push(null);
        }
    }

    while (result[result.length - 1] === null) {
        result.pop();
    }

    return JSON.stringify(result);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    const ary = JSON.parse(data);
    if (!ary.length) return null;

    const root = new TreeNode(ary.shift());
    const q = [root];

    while (q.length && ary.length) {
        const node = q.shift();

        if (!ary.length) break;

        const l = ary.shift();

        if (l !== null) {

            node.left = new TreeNode(l);
            q.push(node.left);
        }

        if (!ary.length) break;

        const r = ary.shift();

        if (r !== null) {

            node.right = new TreeNode(r);
            q.push(node.right);

        }
    }

    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */



console.log(serialize(deserialize(("[1,2,3,null,null,4,5]")))); // "[1,2,3,null,null,4,5]"
console.log(serialize(deserialize(("[]")))); // "[]"
console.log(serialize(deserialize(("[1]")))); // "[1]"
console.log(serialize(deserialize(("[1,2]")))); // "[1,2]"
console.log(serialize(deserialize(("[1,null,2]")))); // "[1,null,2]"


