/*
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

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {

};

console.log(oddEvenList({ val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } })); // [1, 3, 5, 2, 4]
console.log(oddEvenList({ val: 2, next: { val: 1, next: { val: 3, next: null } } })); // [2, 3, 1]

// node Grind169/5-8.js
