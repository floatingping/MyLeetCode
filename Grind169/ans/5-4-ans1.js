/*
Medium | 25 mins
LeetCode #24. Swap Nodes in Pairs
https://leetcode.com/problems/swap-nodes-in-pairs/

Given the head of a linked list, swap every two adjacent nodes and return its head.
Do not change node values; only nodes themselves may be changed.
*/

const ListNode = require('../libs/ListNode');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    const dummy = new (require('../libs/ListNode').constructor)(0);
    dummy.next = head;
    
    let prev = dummy;
    let curr = head;
    
    while (curr && curr.next) {
        // Store the next pair's first node
        const nextPair = curr.next.next;
        const second = curr.next;
        
        // Swap current and second
        prev.next = second;
        second.next = curr;
        curr.next = nextPair;
        
        // Move to next pair
        prev = curr;
        curr = nextPair;
    }
    
    return dummy.next;
};

let head = ListNode.fromArray([1, 2, 3, 4]);
console.log(ListNode.toArray(swapPairs(head))); // [2, 1, 4, 3]

console.log(swapPairs(null)); // null

head = ListNode.fromArray([1]);
console.log(ListNode.toArray(swapPairs(head))); // [1]

// node Grind169/ans/5-4-ans1.js
