/*
3. Merge Two Sorted Lists
https://leetcode.com/problems/merge-two-sorted-lists/

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the two lists.

Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]

Constraints:
The number of nodes in each list is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/

const { ListNode } = require('./lib.js');

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {


};

console.log(ListNode.toArray(mergeTwoLists(ListNode.fromArray([1,2,4]), ListNode.fromArray([1,3,4])))); // [1,1,2,3,4,4]
console.log(ListNode.toArray(mergeTwoLists(ListNode.fromArray([]), ListNode.fromArray([])))); // []
console.log(ListNode.toArray(mergeTwoLists(ListNode.fromArray([]), ListNode.fromArray([0])))); // [0]

// node Grind75/1-3.js
