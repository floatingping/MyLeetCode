/*
Medium | 20 mins
4-17. Remove Nth Node From End of List
19. Remove Nth Node From End of List
https://leetcode.com/problems/remove-nth-node-from-end-of-list/

Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]

Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
*/

const ListNode = require('./libs/ListNode');

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {



};

let head = ListNode.fromArray([1, 2, 3, 4, 5]);
console.log(ListNode.toArray(removeNthFromEnd(head, 2))); // [1, 2, 3, 5]

head = ListNode.fromArray([1]);
console.log(ListNode.toArray(removeNthFromEnd(head, 1))); // []

head = ListNode.fromArray([1, 2]);
console.log(ListNode.toArray(removeNthFromEnd(head, 1))); // [1]


// node Grind169/4-17.js
