/*
234. Palindrome Linked List
https://leetcode.com/problems/palindrome-linked-list/

Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Example 1:
Input: head = [1,2,2,1]
Output: true

Example 2:
Input: head = [1,2]
Output: false

Constraints:
- The number of nodes is in the range [1, 10^5].
- 0 <= Node.val <= 9
*/

const ListNode = require('./libs/ListNode');

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {

};

let head = ListNode.fromArray([1, 2, 2, 1]);
console.log(isPalindrome(head)); // true

head = ListNode.fromArray([1, 2]);
console.log(isPalindrome(head)); // false

// node Grind169/2-1.js
