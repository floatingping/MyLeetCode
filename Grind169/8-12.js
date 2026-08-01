/*
Hard | 35 mins
25. Reverse Nodes in k-Group
https://leetcode.com/problems/reverse-nodes-in-k-group/

Reverse the nodes of a linked list k at a time. Groups with fewer than k nodes
at the end remain in their original order. Node values may not be changed.

Examples:
head = [1,2,3,4,5], k = 2 -> [2,1,4,3,5]
head = [1,2,3,4,5], k = 3 -> [3,2,1,4,5]

Constraints:
- The number of nodes is in the range [1, 5000].
- 0 <= Node.val <= 1000
- 1 <= k <= the number of nodes
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = val === undefined ? 0 : val;
 *     this.next = next === undefined ? null : next;
 * }
 */

const ListNode = require('./libs/ListNode');

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {

};

let head = ListNode.fromArray([1, 2, 3, 4, 5]);
console.log(ListNode.toArray(reverseKGroup(head, 2))); // [2, 1, 4, 3, 5]

head = ListNode.fromArray([1, 2, 3, 4, 5]);
console.log(ListNode.toArray(reverseKGroup(head, 3))); // [3, 2, 1, 4, 5]

// node Grind169/8-12.js
