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

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {

};

console.log(isPalindrome({ val: 1, next: { val: 2, next: { val: 2, next: { val: 1, next: null } } } })); // true
console.log(isPalindrome({ val: 1, next: { val: 2, next: null } })); // false

// node Grind169/2-1.js
