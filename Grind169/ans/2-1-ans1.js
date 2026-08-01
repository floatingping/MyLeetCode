/*
Easy | 20 mins
234. Palindrome Linked List
https://leetcode.com/problems/palindrome-linked-list/

Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Example 1:
Input: head = [1,2,2,1]
Output: true

Example 2:
Input: head = [1,2]
Output: false
*/

const ListNode = require('../libs/ListNode');

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (!head || !head.next) return true;
    
    // Find middle using slow and fast pointers
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // Reverse second half
    let prev = null;
    while (slow) {
        const next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }
    
    // Compare first half and reversed second half
    let left = head, right = prev;
    while (right) { // right will be shorter or equal
        if (left.val !== right.val) return false;
        left = left.next;
        right = right.next;
    }
    
    return true;
};

let head = ListNode.fromArray([1, 2, 2, 1]);
console.log(isPalindrome(head)); // true

head = ListNode.fromArray([1, 2]);
console.log(isPalindrome(head)); // false

// node Grind169/ans/2-1-ans1.js
