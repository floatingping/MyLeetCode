const ListNode = require('../libs/ListNode');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;
};

let head = ListNode.fromArray([1, 2, 3, 4, 5]);
console.log(ListNode.toArray(middleNode(head))); // [3, 4, 5]

head = ListNode.fromArray([1, 2, 3, 4, 5, 6]);
console.log(ListNode.toArray(middleNode(head))); // [4, 5, 6]

head = ListNode.fromArray([1]);
console.log(ListNode.toArray(middleNode(head))); // [1]

// node Grind169/ans/1-22-ans1.js
