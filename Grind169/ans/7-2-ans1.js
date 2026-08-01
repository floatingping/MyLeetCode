/*
Rotate List - Two Pointer
Time Complexity: O(n)
Space Complexity: O(1)
*/

const ListNode = require('../libs/ListNode');

/**
 * @param {ListNode|null} head
 * @param {number} k
 * @return {ListNode|null}
 */
var rotateRight = function (head, k) {
    if (!head || !head.next) return head;

    // Calculate the length
    let length = 0;
    let current = head;
    while (current) {
        length++;
        current = current.next;
    }

    // Normalize k
    k = k % length;
    if (k === 0) return head;

    // Find the node before the rotation point
    let slow = head;
    let fast = head;

    for (let i = 0; i < k; i++) {
        fast = fast.next;
    }

    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    const newHead = slow.next;
    slow.next = null;
    fast.next = head;

    return newHead;
};

console.log(ListNode.toArray(rotateRight(ListNode.fromArray([1, 2, 3, 4, 5]), 2))); // [4, 5, 1, 2, 3]
console.log(ListNode.toArray(rotateRight(ListNode.fromArray([0, 1, 2]), 4))); // [2, 0, 1]

// node Grind169/ans/7-2-ans1.js
