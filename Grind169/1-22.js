/*
Easy | 20 mins
876. Middle of the Linked List
https://leetcode.com/problems/middle-of-the-linked-list/

Given the head of a singly linked list, return its middle node. When there are two middle nodes, return the second one.

Example 1:

Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: Node 3 is the middle node.

Example 2:

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Nodes 3 and 4 are middle nodes, so return node 4.

Constraints:

The number of nodes is in the range [1, 100].
1 <= Node.val <= 100
*/

const ListNode = require('./libs/ListNode');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {



};

let head = ListNode.fromArray([1, 2, 3, 4, 5]);
console.log(ListNode.toArray(middleNode(head))); // [3, 4, 5]

head = ListNode.fromArray([1, 2, 3, 4, 5, 6]);
console.log(ListNode.toArray(middleNode(head))); // [4, 5, 6]

head = ListNode.fromArray([1]);
console.log(ListNode.toArray(middleNode(head))); // [1]


// node Grind169/1-22.js
