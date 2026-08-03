/*
Hard | 30 mins
7-15. Merge k Sorted Lists
Difficulty: Hard
Suggested time: 30 mins

23. Merge k Sorted Lists
https://leetcode.com/problems/merge-k-sorted-lists/

Example 1:
Input: lists = [[1, 4, 5], [1, 3, 4], [2, 6]]
Output: [1, 1, 2, 3, 4, 4, 5, 6]

Example 2:
Input: lists = []
Output: []

Example 3:
Input: lists = [[]]
Output: []
*/

const ListNode = require('./libs/ListNode');

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {

};

const list1 = ListNode.fromArray([1, 4, 5]);
const list2 = ListNode.fromArray([1, 3, 4]);
const list3 = ListNode.fromArray([2, 6]);
console.log(ListNode.toArray(mergeKLists([list1, list2, list3]))); // [1, 1, 2, 3, 4, 4, 5, 6]
console.log(ListNode.toArray(mergeKLists([]))); // []
console.log(ListNode.toArray(mergeKLists([ListNode.fromArray([])]))); // []

// node Grind169/7-15.js
