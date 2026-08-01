/*
Medium | 25 mins
LeetCode #328. Odd Even Linked List
https://leetcode.com/problems/odd-even-linked-list/

Given the head of a singly linked list, group nodes at odd positions followed by nodes at even positions, preserving their relative order. The first node is odd, the second is even, and so on.

Example 1:
Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]

Example 2:
Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]

Constraints:
- The number of nodes is in the range [0, 10^4].
- -10^6 <= Node.val <= 10^6
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *   this.val = val === undefined ? 0 : val;
 *   this.next = next === undefined ? null : next;
 * }
 */

const ListNode = require('./libs/ListNode');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {

};

let head = ListNode.fromArray([1, 2, 3, 4, 5]);
console.log(ListNode.toArray(oddEvenList(head))); // [1, 3, 5, 2, 4]

head = ListNode.fromArray([2, 1, 3]);
console.log(ListNode.toArray(oddEvenList(head))); // [2, 3, 1]

// node Grind169/5-8.js
