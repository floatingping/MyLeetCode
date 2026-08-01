/*
143. Reorder List
https://leetcode.com/problems/reorder-list/
Difficulty: Medium | Suggested time: 25 mins

Given the head of a singly linked list, reorder it in place from
L0 -> L1 -> ... -> Ln to L0 -> Ln -> L1 -> Ln - 1 -> ... . Do not change node
values; relink the nodes instead.

Example 1:
Input: head = [1,2,3,4]
Output: [1,4,2,3]

Example 2:
Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]

Constraints:
- The number of nodes is in the range [1, 5 * 10^4].
- 1 <= Node.val <= 1000
*/

const ListNode = require('./libs/ListNode');

/**
 * @param {ListNode|null} head
 * @return {void}
 */
var reorderList = function (head) {

};

let head = ListNode.fromArray([1, 2, 3, 4]);
reorderList(head);
console.log(ListNode.toArray(head)); // [1, 4, 2, 3]

head = ListNode.fromArray([1, 2, 3, 4, 5]);
reorderList(head);
console.log(ListNode.toArray(head)); // [1, 5, 2, 4, 3]

// node Grind169/6-17.js
