// Definition for singly-linked list node
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }

    // Convert array to linked list
    // Example: [1,2,4] => 1->2->4
    static fromArray(arr) {
        if (!arr || arr.length === 0) return null;
        let head = new ListNode(arr[0]);
        let current = head;
        for (let i = 1; i < arr.length; i++) {
            current.next = new ListNode(arr[i]);
            current = current.next;
        }
        return head;
    }

    // Convert linked list to array
    // Example: 1->2->4 => [1,2,4]
    static toArray(head) {
        let result = [];
        let current = head;
        while (current) {
            result.push(current.val);
            current = current.next;
        }
        return result;
    }
}

// Definition for a binary tree node
class TreeNode {
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
}

// Definition for a Node in a graph
class Node {
    constructor(val = 0, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }

    // Convert adjacency list to Node graph
    // Example: [[2,4],[1,3],[2,4],[1,3]] => Node graph
    static fromAdjacencyList(adjList) {
        if (!adjList || adjList.length === 0) return null;

        const nodes = {};
        // Create all nodes first
        for (let i = 0; i < adjList.length; i++) {
            nodes[i + 1] = new Node(i + 1);
        }

        // Connect neighbors
        for (let i = 0; i < adjList.length; i++) {
            for (let neighbor of adjList[i]) {
                nodes[i + 1].neighbors.push(nodes[neighbor]);
            }
        }

        return nodes[1];
    }

    // Convert Node graph to adjacency list
    // Example: Node graph => [[2,4],[1,3],[2,4],[1,3]]
    static toAdjacencyList(node) {
        if (!node) return [];

        const visited = new Set();
        const result = {};
        const queue = [node];

        while (queue.length > 0) {
            const current = queue.shift();
            if (visited.has(current.val)) continue;

            visited.add(current.val);
            result[current.val] = current.neighbors
                .map((n) => n.val)
                .sort((a, b) => a - b);

            for (let neighbor of current.neighbors) {
                if (!visited.has(neighbor.val)) {
                    queue.push(neighbor);
                }
            }
        }

        // Convert to array format
        const maxVal = Math.max(...Object.keys(result).map(Number));
        const arr = [];
        for (let i = 1; i <= maxVal; i++) {
            arr.push(result[i] || []);
        }
        return arr;
    }
}

module.exports = { ListNode, TreeNode, Node };
