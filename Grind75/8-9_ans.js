const { ListNode } = require('./lib.js');

var mergeKLists = function (lists) {
    if (lists.length === 0) return null;
    
    const merge = (l1, l2) => {
        const dummy = new ListNode(0);
        let current = dummy;
        
        while (l1 && l2) {
            if (l1.val < l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }
        
        current.next = l1 ? l1 : l2;
        return dummy.next;
    };
    
    while (lists.length > 1) {
        const mergedLists = [];
        for (let i = 0; i < lists.length; i += 2) {
            const l1 = lists[i];
            const l2 = i + 1 < lists.length ? lists[i + 1] : null;
            mergedLists.push(merge(l1, l2));
        }
        lists = mergedLists;
    }
    
    return lists[0];
};

let list1 = ListNode.fromArray([1,4,5]);
let list2 = ListNode.fromArray([1,3,4]);
let list3 = ListNode.fromArray([2,6]);
console.log(ListNode.toArray(mergeKLists([list1, list2, list3])));    // [1,1,2,1,3,4,4,5,6]

console.log(ListNode.toArray(mergeKLists([])));                        // []
console.log(ListNode.toArray(mergeKLists([null])));                    // []

// node Grind75/8-9_ans.js
