


module.exports = class ListNode {
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
};
