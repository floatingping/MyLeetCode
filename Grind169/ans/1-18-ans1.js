/*
206. Reverse Linked List - Iterative Solution
Time Complexity: O(n)
Space Complexity: O(1)
*/

const ListNode = require('../libs/ListNode');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let prev = null;
    let current = head;
    
    while (current) {
        // Store next node
        const nextTemp = current.next;
        
        // Reverse the link
        current.next = prev;
        
        // Move prev and current one step forward
        prev = current;
        current = nextTemp;
    }
    
    return prev;
};

let head = ListNode.fromArray([1, 2, 3, 4, 5]);
console.log(ListNode.toArray(reverseList(head))); // [5, 4, 3, 2, 1]

head = ListNode.fromArray([1, 2]);
console.log(ListNode.toArray(reverseList(head))); // [2, 1]

console.log(reverseList(null)); // null

// node Grind169/ans/1-18-ans1.js
