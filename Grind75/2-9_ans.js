const { ListNode } = require('./lib.js');

var middleNode = function(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};

console.log(ListNode.toArray(middleNode(ListNode.fromArray([1,2,3,4,5])))); // [3,4,5]
console.log(ListNode.toArray(middleNode(ListNode.fromArray([1,2,3,4,5,6])))); // [4,5,6]
console.log(ListNode.toArray(middleNode(ListNode.fromArray([1])))); // [1]

// node Grind75/2-9_ans.js
