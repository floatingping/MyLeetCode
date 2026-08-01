


module.exports = class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }

    // Convert array (level-order) to binary tree
    // Example: [2,1,3] => 
    //     2
    //    / \
    //   1   3
    // Use null for missing nodes: [1,2,null,3]
    static fromArray(arr) {
        if (!arr || arr.length === 0 || arr[0] === null) return null;
        let root = new TreeNode(arr[0]);
        let queue = [root];
        let i = 1;
        while (queue.length > 0 && i < arr.length) {
            let node = queue.shift();
            if (arr[i] !== null) {
                node.left = new TreeNode(arr[i]);
                queue.push(node.left);
            }
            i++;
            if (i < arr.length && arr[i] !== null) {
                node.right = new TreeNode(arr[i]);
                queue.push(node.right);
            }
            i++;
        }
        return root;
    }

    // Convert binary tree to array (level-order)
    // Example: 
    //     2
    //    / \
    //   1   3
    // => [2,1,3]
    static toArray(root) {
        if (!root) return [];
        let result = [];
        let queue = [root];
        while (queue.length > 0) {
            let node = queue.shift();
            if (node) {
                result.push(node.val);
                queue.push(node.left);
                queue.push(node.right);
            } else {
                result.push(null);
            }
        }
        while (result[result.length - 1] === null) {
            result.pop();
        }
        return result;
    }

    // Find node by value in tree
    static findNode(root, val) {
        if (!root) return null;
        if (root.val === val) return root;
        let left = TreeNode.findNode(root.left, val);
        if (left) return left;
        return TreeNode.findNode(root.right, val);
    }
};


