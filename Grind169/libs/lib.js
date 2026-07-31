class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }

    static fromArray(values) {
        const dummy = new ListNode();
        let current = dummy;
        for (const value of values) {
            current.next = new ListNode(value);
            current = current.next;
        }
        return dummy.next;
    }

    static toArray(head) {
        const values = [];
        while (head) {
            values.push(head.val);
            head = head.next;
        }
        return values;
    }
}

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }

    static fromArray(values) {
        if (!values.length || values[0] === null) return null;

        const root = new TreeNode(values[0]);
        const queue = [root];
        let index = 1;

        while (queue.length && index < values.length) {
            const node = queue.shift();
            for (const side of ["left", "right"]) {
                if (index < values.length && values[index] !== null) {
                    node[side] = new TreeNode(values[index]);
                    queue.push(node[side]);
                }
                index++;
            }
        }

        return root;
    }

    static toArray(root) {
        if (!root) return [];

        const values = [];
        const queue = [root];
        while (queue.length) {
            const node = queue.shift();
            if (node) {
                values.push(node.val);
                queue.push(node.left, node.right);
            } else {
                values.push(null);
            }
        }

        while (values.at(-1) === null) values.pop();
        return values;
    }
}

class Node {
    constructor(val = 0, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

module.exports = { ListNode, TreeNode, Node };