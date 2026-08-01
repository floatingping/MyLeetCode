/*
Medium | 25 mins
LeetCode #328. Odd Even Linked List
https://leetcode.com/problems/odd-even-linked-list/

Given the head of a singly linked list, group nodes at odd positions followed by nodes at even positions,
preserving their relative order. The first node is odd, the second is even, and so on.
*/

const ListNode = require('../libs/ListNode');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
    if (!head || !head.next) return head;
    
    let oddHead = head;
    let evenHead = head.next;
    
    let odd = oddHead;
    let even = evenHead;
    
    while (even && even.next) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    
    odd.next = evenHead;
    return oddHead;
};

let head = ListNode.fromArray([1, 2, 3, 4, 5]);
console.log(ListNode.toArray(oddEvenList(head))); // [1, 3, 5, 2, 4]

head = ListNode.fromArray([2, 1, 3]);
console.log(ListNode.toArray(oddEvenList(head))); // [2, 3, 1]

// node Grind169/ans/5-8-ans1.js
