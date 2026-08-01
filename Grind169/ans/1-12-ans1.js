/*
141. Linked List Cycle - Floyd's Cycle Detection (Fast & Slow Pointer)
Time Complexity: O(n)
Space Complexity: O(1)
*/

const ListNode = require('../libs/ListNode');

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head || !head.next) return false;
    
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

let head = ListNode.fromArray([3, 2, 0, -4]);
console.log(hasCycle(head)); // true, tail connects to index 1

head = ListNode.fromArray([1, 2]);
console.log(hasCycle(head)); // true, tail connects to index 0

head = ListNode.fromArray([1]);
console.log(hasCycle(head)); // false

// node Grind169/ans/1-12-ans1.js
