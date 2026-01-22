const { ListNode } = require('./lib.js');

var mergeTwoLists = function(list1, list2) {
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

    current.next = list1 ? list1 : list2;
    return dummy.next;
};

console.log(ListNode.toArray(mergeTwoLists(ListNode.fromArray([1,2,4]), ListNode.fromArray([1,3,4])))); // [1,1,2,3,4,4]
console.log(ListNode.toArray(mergeTwoLists(ListNode.fromArray([]), ListNode.fromArray([])))); // []
console.log(ListNode.toArray(mergeTwoLists(ListNode.fromArray([]), ListNode.fromArray([0])))); // [0]

// node Grind75/1-3_ans.js
