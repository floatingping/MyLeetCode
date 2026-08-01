/*
Easy | 20 mins
141. Linked List Cycle
https://leetcode.com/problems/linked-list-cycle/

Given the head of a linked list, return true if following next pointers eventually revisits a node; otherwise, return false.

Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: The tail points back to the node at index 1.

Example 2:

Input: head = [1,2], pos = 0
Output: true

Example 3:

Input: head = [1], pos = -1
Output: false

Constraints:

The number of nodes is in the range [0, 10^4].
-10^5 <= Node.val <= 10^5
pos is -1 or a valid index in the linked list.
*/

const ListNode = require('./libs/ListNode');

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {



};

let head = ListNode.fromArray([3, 2, 0, -4]);
console.log(hasCycle(head)); // true, tail connects to index 1

head = ListNode.fromArray([1, 2]);
console.log(hasCycle(head)); // true, tail connects to index 0

head = ListNode.fromArray([1]);
console.log(hasCycle(head)); // false


// node Grind169/1-12.js
