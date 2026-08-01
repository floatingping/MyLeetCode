/*
Medium | 25 mins
LeetCode #2. Add Two Numbers
https://leetcode.com/problems/add-two-numbers/

Two non-empty linked lists represent two non-negative integers in reverse digit order. Add the two numbers and return the sum as a linked list in the same reverse order. The numbers have no leading zero except zero itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

Constraints:
- The number of nodes in each linked list is in the range [1, 100].
- 0 <= Node.val <= 9
- The input lists represent numbers without leading zeros.
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

};

let l1 = ListNode.fromArray([2, 4, 3]);
let l2 = ListNode.fromArray([5, 6, 4]);
console.log(ListNode.toArray(addTwoNumbers(l1, l2))); // [7, 0, 8]

l1 = ListNode.fromArray([0]);
l2 = ListNode.fromArray([0]);
console.log(ListNode.toArray(addTwoNumbers(l1, l2))); // [0]

// node Grind169/5-16.js
