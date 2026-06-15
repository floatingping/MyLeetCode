const { TreeNode } = require("./lib.js");

var serialize = function (root) {
    const result = [];

    const preorder = (node) => {
        if (!node) {
            result.push("null");
            return;
        }
        result.push(node.val.toString());
        preorder(node.left);
        preorder(node.right);
    };

    preorder(root);
    return result.join(",");
};

var deserialize = function (data) {
    const values = data.split(",");
    let index = 0;

    const buildTree = () => {
        const val = values[index++];
        if (val === "null") {
            return null;
        }
        const node = new TreeNode(parseInt(val));
        node.left = buildTree();
        node.right = buildTree();
        return node;
    };

    return buildTree();
};

// Test cases
let root = TreeNode.fromArray([1, 2, 3, null, null, 4, 5]);
let serialized = serialize(root);
let deserialized = deserialize(serialized);
console.log(TreeNode.toArray(deserialized)); // [1,2,3,null,null,4,5]

let empty = serialize(null);
console.log(deserialize(empty)); // null

// node Grind75/8-3_ans.js
