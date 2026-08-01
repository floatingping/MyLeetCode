/*
Medium | 25 mins
LeetCode #2. Add Two Numbers
https://leetcode.com/problems/add-two-numbers/

Two non-empty linked lists represent two non-negative integers in reverse digit order.
Add the two numbers and return the sum as a linked list in the same reverse order.
*/

const ListNode = require('../libs/ListNode');

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const dummy = new (require('../libs/ListNode').constructor)(0);
    let current = dummy;
    let carry = 0;
    
    while (l1 || l2 || carry) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        const sum = val1 + val2 + carry;
        
        carry = Math.floor(sum / 10);
        const digit = sum % 10;
        
        current.next = new (require('../libs/ListNode').constructor)(digit);
        current = current.next;
        
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    
    return dummy.next;
};

let l1 = ListNode.fromArray([2, 4, 3]);
let l2 = ListNode.fromArray([5, 6, 4]);
console.log(ListNode.toArray(addTwoNumbers(l1, l2))); // [7, 0, 8]

l1 = ListNode.fromArray([0]);
l2 = ListNode.fromArray([0]);
console.log(ListNode.toArray(addTwoNumbers(l1, l2))); // [0]

// node Grind169/ans/5-16-ans1.js
