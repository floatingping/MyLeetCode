/*
Merge k Sorted Lists - Min Heap
Time Complexity: O(n log k) where n is total nodes, k is number of lists
Space Complexity: O(k)
*/

const ListNode = require('../libs/ListNode');

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (!lists || lists.length === 0) return null;

    const minHeap = [];

    // Add first node from each list to heap
    for (let i = 0; i < lists.length; i++) {
        if (lists[i]) {
            minHeap.push(lists[i]);
        }
    }

    // Build min heap
    for (let i = Math.floor(minHeap.length / 2) - 1; i >= 0; i--) {
        heapifyDown(minHeap, i);
    }

    const dummy = new ListNode(0);
    let current = dummy;

    while (minHeap.length > 0) {
        const node = minHeap[0];
        current.next = node;
        current = current.next;

        if (node.next) {
            minHeap[0] = node.next;
            heapifyDown(minHeap, 0);
        } else {
            minHeap[0] = minHeap[minHeap.length - 1];
            minHeap.pop();
            if (minHeap.length > 0) {
                heapifyDown(minHeap, 0);
            }
        }
    }

    return dummy.next;
};

function heapifyDown(heap, i) {
    while (true) {
        let smallest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        if (left < heap.length && heap[left].val < heap[smallest].val) {
            smallest = left;
        }
        if (right < heap.length && heap[right].val < heap[smallest].val) {
            smallest = right;
        }
        if (smallest !== i) {
            [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
            i = smallest;
        } else {
            break;
        }
    }
}

const list1 = ListNode.fromArray([1, 4, 5]);
const list2 = ListNode.fromArray([1, 3, 4]);
const list3 = ListNode.fromArray([2, 6]);
console.log(ListNode.toArray(mergeKLists([list1, list2, list3]))); // [1, 1, 2, 3, 4, 4, 5, 6]

// node Grind169/ans/7-15-ans1.js
