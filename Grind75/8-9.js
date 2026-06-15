/*
8-9. Merge k Sorted Lists
https://leetcode.com/problems/merge-k-sorted-lists/

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]

Example 2:

Input: lists = []
Output: []

Example 3:

Input: lists = [[]]
Output: []

Constraints:

k == lists.length
0 <= k <= 104
0 <= lists[i].length <= 500
-104 <= lists[i][j] <= 104
*/

const { ListNode } = require("./lib.js");

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {};

let list1 = ListNode.fromArray([1, 4, 5]);
let list2 = ListNode.fromArray([1, 3, 4]);
let list3 = ListNode.fromArray([2, 6]);
console.log(ListNode.toArray(mergeKLists([list1, list2, list3]))); // [1,1,2,3,4,4,5,6]

console.log(ListNode.toArray(mergeKLists([]))); // []
console.log(ListNode.toArray(mergeKLists([null]))); // []

// node Grind75/8-9.js
