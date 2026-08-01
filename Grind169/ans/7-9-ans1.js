/*
Serialize and Deserialize Binary Tree - Pre-order Traversal
Time Complexity: O(n)
Space Complexity: O(n)
*/

const TreeNode = require('../libs/TreeNode');

/**
 * Encodes a tree to a single string.
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    const result = [];

    function dfs(node) {
        if (!node) {
            result.push('null');
            return;
        }
        result.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    return result.join(',');
};

/**
 * Decodes your encoded data to tree.
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    const nodes = data.split(',');
    let i = 0;

    function dfs() {
        if (i >= nodes.length) return null;
        if (nodes[i] === 'null') {
            i++;
            return null;
        }
        const val = parseInt(nodes[i]);
        i++;
        const node = new TreeNode(val);
        node.left = dfs();
        node.right = dfs();
        return node;
    }

    return dfs();
};

let tree = TreeNode.fromArray([1, 2, 3, null, null, 4, 5]);
const serialized = serialize(tree);
console.log(serialized); // "1,2,null,null,3,4,null,null,5,null,null"
console.log(TreeNode.toArray(deserialize(serialized))); // [1, 2, 3, null, 4, 5]

// node Grind169/ans/7-9-ans1.js
