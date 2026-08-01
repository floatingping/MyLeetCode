/*
Medium | 25 mins
LeetCode #148. Sort List
https://leetcode.com/problems/sort-list/

Given the head of a linked list, return the list sorted in ascending order.
*/

const ListNode = require('../libs/ListNode');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    // Base case: empty list or single node
    if (!head || !head.next) return head;
    
    // Find middle using slow and fast pointers
    let slow = head;
    let fast = head;
    let prev = null;
    
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // Split the list into two halves
    prev.next = null;
    
    // Recursively sort both halves
    const left = sortList(head);
    const right = sortList(slow);
    
    // Merge sorted halves
    return merge(left, right);
};

function merge(l1, l2) {
    const dummy = new (require('../libs/ListNode').constructor)(0);
    let current = dummy;
    
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    current.next = l1 || l2;
    return dummy.next;
}

let head = ListNode.fromArray([4, 2, 1, 3]);
console.log(ListNode.toArray(sortList(head))); // [1, 2, 3, 4]

head = ListNode.fromArray([-1, 5, 3, 4, 0]);
console.log(ListNode.toArray(sortList(head))); // [-1, 0, 3, 4, 5]

// node Grind169/ans/5-18-ans1.js
