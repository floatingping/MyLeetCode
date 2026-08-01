/*
Medium | 25 mins
143. Reorder List
https://leetcode.com/problems/reorder-list/

Given a singly linked list, reorder it from L0 -> L1 -> ... -> Ln to
L0 -> Ln -> L1 -> Ln-1 -> ...

Strategy: Three steps
1. Find the middle of the list using slow/fast pointers
2. Reverse the second half of the list
3. Merge the first half and reversed second half
*/

const ListNode = require('../libs/ListNode');

/**
 * @param {ListNode|null} head
 * @return {void}
 */
var reorderList = function (head) {
    if (!head || !head.next || !head.next.next) {
        return;
    }
    
    // Step 1: Find the middle of the list
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // Step 2: Reverse the second half
    let second = reverseList(slow);
    
    // Step 3: Merge the two halves
    let first = head;
    while (second.next) { // second.next is not null means second has more nodes
        const tempFirst = first.next;
        const tempSecond = second.next;
        
        first.next = second;
        second.next = tempFirst;
        
        first = tempFirst;
        second = tempSecond;
    }
};

function reverseList(head) {
    let prev = null, curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

let head = ListNode.fromArray([1, 2, 3, 4]);
reorderList(head);
console.log(ListNode.toArray(head)); // [1, 4, 2, 3]

head = ListNode.fromArray([1, 2, 3, 4, 5]);
reorderList(head);
console.log(ListNode.toArray(head)); // [1, 5, 2, 4, 3]

// node Grind169/ans/6-17-ans1.js
