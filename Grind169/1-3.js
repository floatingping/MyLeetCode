/*
Easy | 20 mins
21. Merge Two Sorted Lists
https://leetcode.com/problems/merge-two-sorted-lists/

Given the heads of two sorted linked lists, merge them into one sorted linked list and return its head.

Example 1:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Explanation: The nodes are reordered into one nondecreasing list.

Example 2:

Input: list1 = [], list2 = []
Output: []

Example 3:

Input: list1 = [], list2 = [0]
Output: [0]

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both lists are sorted in nondecreasing order.
*/

const ListNode = require('./libs/ListNode');

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {



};

let list1 = ListNode.fromArray([1, 2, 4]);
let list2 = ListNode.fromArray([1, 3, 4]);
console.log(ListNode.toArray(mergeTwoLists(list1, list2))); // [1, 1, 2, 3, 4, 4]

list1 = ListNode.fromArray([]);
list2 = ListNode.fromArray([]);
console.log(ListNode.toArray(mergeTwoLists(list1, list2))); // []

list1 = ListNode.fromArray([]);
list2 = ListNode.fromArray([0]);
console.log(ListNode.toArray(mergeTwoLists(list1, list2))); // [0]


// node Grind169/1-3.js
