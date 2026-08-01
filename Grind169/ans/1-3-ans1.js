/*
Merge Two Sorted Lists - Iterative
Time Complexity: O(n + m)
Space Complexity: O(1)
*/

const ListNode = require('../libs/ListNode');

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    const dummy = new ListNode(0);
    let current = dummy;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    current.next = list1 || list2;
    return dummy.next;
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

// node Grind169/ans/1-3-ans1.js
