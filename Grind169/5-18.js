/*
LeetCode #148. Sort List
https://leetcode.com/problems/sort-list/

Given the head of a linked list, return the list sorted in ascending order.

Example 1:
Input: head = [4,2,1,3]
Output: [1,2,3,4]

Example 2:
Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]

Example 3:
Input: head = []
Output: []

Constraints:
- The number of nodes in the list is in the range [0, 5 * 10^4].
- -10^5 <= Node.val <= 10^5
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *   this.val = val === undefined ? 0 : val;
 *   this.next = next === undefined ? null : next;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {

};

console.log(sortList({ val: 4, next: { val: 2, next: { val: 1, next: { val: 3, next: null } } } })); // [1, 2, 3, 4]
console.log(sortList({ val: -1, next: { val: 5, next: { val: 3, next: { val: 4, next: { val: 0, next: null } } } } })); // [-1, 0, 3, 4, 5]

// node Grind169/5-18.js
