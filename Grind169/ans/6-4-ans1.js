/*
Medium | 30 mins
215. Kth Largest Element in an Array
https://leetcode.com/problems/kth-largest-element-in-an-array/

Given an integer array nums and an integer k, return the kth largest element.

Strategy: Min Heap (maintain k largest elements)
- Use a min heap of size k
- When heap has k elements and new element is larger than min, replace min
- Final heap root is the kth largest element
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    // Using array as min heap, but JavaScript doesn't have built-in heap
    // Alternative: sort approach
    return nums.sort((a, b) => b - a)[k - 1];
};

// More efficient heap-based solution (simulated)
var findKthLargestHeap = function (nums, k) {
    const minHeap = [];
    
    for (let num of nums) {
        if (minHeap.length < k) {
            minHeap.push(num);
            moveUp(minHeap, minHeap.length - 1);
        } else if (num > minHeap[0]) {
            minHeap[0] = num;
            moveDown(minHeap, 0);
        }
    }
    
    return minHeap[0];
};

function moveUp(heap, index) {
    while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (heap[parentIndex] > heap[index]) {
            [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
            index = parentIndex;
        } else {
            break;
        }
    }
}

function moveDown(heap, index) {
    while (2 * index + 1 < heap.length) {
        let smallest = index;
        const leftChild = 2 * index + 1;
        const rightChild = 2 * index + 2;
        
        if (leftChild < heap.length && heap[leftChild] < heap[smallest]) {
            smallest = leftChild;
        }
        if (rightChild < heap.length && heap[rightChild] < heap[smallest]) {
            smallest = rightChild;
        }
        
        if (smallest !== index) {
            [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
            index = smallest;
        } else {
            break;
        }
    }
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // 4

// node Grind169/ans/6-4-ans1.js
