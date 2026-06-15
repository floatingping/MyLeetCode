const { ListNode } = require("./lib.js");

var hasCycle = function (head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }

    return false;
};

// Helper: Create list with cycle
function createListWithCycle(arr, pos) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    let cycleNode = null;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        if (i === pos) cycleNode = current.next;
        current = current.next;
    }
    if (pos !== -1 && cycleNode) {
        current.next = cycleNode;
    }
    return head;
}

console.log(hasCycle(createListWithCycle([3, 2, 0, -4], 1))); // true
console.log(hasCycle(createListWithCycle([1, 2], -1))); // false
console.log(hasCycle(createListWithCycle([1], -1))); // false

// node Grind75/1-12_ans.js
