/*
Easy | 20 mins
206. Reverse Linked List
https://leetcode.com/problems/reverse-linked-list/

Given the head of a singly linked list, reverse the list and return the new head.

Example 1:

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Explanation: The next links are reversed.

Example 2:

Input: head = [1,2]
Output: [2,1]

Example 3:

Input: head = []
Output: []

Constraints:

The number of nodes is in the range [0, 5000].
-5000 <= Node.val <= 5000
*/

const ListNode = require('./libs/ListNode');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {



};

let head = ListNode.fromArray([1, 2, 3, 4, 5]);
console.log(ListNode.toArray(reverseList(head))); // [5, 4, 3, 2, 1]

head = ListNode.fromArray([1, 2]);
console.log(ListNode.toArray(reverseList(head))); // [2, 1]

console.log(reverseList(null)); // null


// node Grind169/1-18.js
