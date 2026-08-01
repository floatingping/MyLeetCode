/*
Medium | 25 mins
LeetCode #24. Swap Nodes in Pairs
https://leetcode.com/problems/swap-nodes-in-pairs/

Given the head of a linked list, swap every two adjacent nodes and return its head. Do not change node values; only nodes themselves may be changed.

Example 1:
Input: head = [1,2,3,4]
Output: [2,1,4,3]

Example 2:
Input: head = []
Output: []

Example 3:
Input: head = [1]
Output: [1]

Constraints:
- The number of nodes is in the range [0, 100].
- 0 <= Node.val <= 100
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
var swapPairs = function (head) {

};

let head = ListNode.fromArray([1, 2, 3, 4]);
console.log(ListNode.toArray(swapPairs(head))); // [2, 1, 4, 3]

console.log(swapPairs(null)); // null

head = ListNode.fromArray([1]);
console.log(ListNode.toArray(swapPairs(head))); // [1]

// node Grind169/5-4.js
