/*
12. Linked List Cycle
https://leetcode.com/problems/linked-list-cycle/

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos indicates the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the second node.

Example 2:
Input: head = [1,2], pos = -1
Output: false
Explanation: There is no cycle in the linked list.

Example 3:
Input: head = [1], pos = -1
Output: false

Constraints:
The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.
*/

const { ListNode } = require("./lib.js");

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {};

// Helper: Create list with cycle
function createListWithCycle(arr, pos) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    let cycleNode = null;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        if (i === pos) cycleNode = current.next;
        current = current.next;
    }
    if (pos !== -1 && cycleNode) {
        current.next = cycleNode;
    }
    return head;
}

console.log(hasCycle(createListWithCycle([3, 2, 0, -4], 1))); // true
console.log(hasCycle(createListWithCycle([1, 2], -1))); // false
console.log(hasCycle(createListWithCycle([1], -1))); // false

// node Grind75/1-12.js
