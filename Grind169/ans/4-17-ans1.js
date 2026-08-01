/*
Medium | 20 mins
4-17. Remove Nth Node From End of List
19. Remove Nth Node From End of List
https://leetcode.com/problems/remove-nth-node-from-end-of-list/
*/

const ListNode = require('../libs/ListNode');

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
	// Create a dummy node to handle edge case of removing the head
	const dummy = new ListNode(0);
	dummy.next = head;
	
	let first = dummy;
	let second = dummy;
	
	// Move first pointer n+1 steps ahead
	for (let i = 0; i <= n; i++) {
		first = first.next;
	}
	
	// Move both pointers until first reaches null
	while (first !== null) {
		first = first.next;
		second = second.next;
	}
	
	// Remove the nth node
	second.next = second.next.next;
	
	return dummy.next;
};

let head = ListNode.fromArray([1, 2, 3, 4, 5]);
console.log(ListNode.toArray(removeNthFromEnd(head, 2))); // [1, 2, 3, 5]

head = ListNode.fromArray([1]);
console.log(ListNode.toArray(removeNthFromEnd(head, 1))); // []

head = ListNode.fromArray([1, 2]);
console.log(ListNode.toArray(removeNthFromEnd(head, 1))); // [1]

// node Grind169/ans/4-17-ans1.js
