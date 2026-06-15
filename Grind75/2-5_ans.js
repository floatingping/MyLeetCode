const { ListNode } = require("./lib.js");

var reverseList = function (head) {
    let prev = null;
    let current = head;

    while (current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
};

console.log(ListNode.toArray(reverseList(ListNode.fromArray([1, 2, 3, 4, 5])))); // [5,4,3,2,1]
console.log(ListNode.toArray(reverseList(ListNode.fromArray([1, 2])))); // [2,1]
console.log(ListNode.toArray(reverseList(ListNode.fromArray([])))); // []

// node Grind75/2-5_ans.js
