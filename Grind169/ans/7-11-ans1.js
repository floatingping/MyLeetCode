/*
Find Median from Data Stream - Heap (Two Heaps)
Time Complexity: O(log n) insert, O(1) median
Space Complexity: O(n)
*/

class MedianFinder {
    constructor() {
        // MaxHeap for smaller half
        this.maxHeap = [];
        // MinHeap for larger half
        this.minHeap = [];
    }

    /**
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        // Add to maxHeap first
        this.addToMaxHeap(num);

        // Ensure maxHeap max <= minHeap min
        if (this.maxHeap.length > 0 && this.minHeap.length > 0 &&
            this.getMaxHeapMax() > this.getMinHeapMin()) {
            const val = this.removeFromMaxHeap();
            this.addToMinHeap(val);
        }

        // Balance sizes: maxHeap can have at most 1 more element
        if (this.maxHeap.length > this.minHeap.length + 1) {
            const val = this.removeFromMaxHeap();
            this.addToMinHeap(val);
        }
        if (this.minHeap.length > this.maxHeap.length) {
            const val = this.removeFromMinHeap();
            this.addToMaxHeap(val);
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.maxHeap.length > this.minHeap.length) {
            return this.getMaxHeapMax();
        }
        return (this.getMaxHeapMax() + this.getMinHeapMin()) / 2;
    }

    addToMaxHeap(val) {
        this.maxHeap.push(val);
        this.bubbleUpMaxHeap(this.maxHeap.length - 1);
    }

    removeFromMaxHeap() {
        const max = this.maxHeap[0];
        this.maxHeap[0] = this.maxHeap[this.maxHeap.length - 1];
        this.maxHeap.pop();
        if (this.maxHeap.length > 0) {
            this.bubbleDownMaxHeap(0);
        }
        return max;
    }

    bubbleUpMaxHeap(i) {
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.maxHeap[i] > this.maxHeap[parent]) {
                [this.maxHeap[i], this.maxHeap[parent]] = [this.maxHeap[parent], this.maxHeap[i]];
                i = parent;
            } else {
                break;
            }
        }
    }

    bubbleDownMaxHeap(i) {
        while (true) {
            let largest = i;
            const left = 2 * i + 1;
            const right = 2 * i + 2;

            if (left < this.maxHeap.length && this.maxHeap[left] > this.maxHeap[largest]) {
                largest = left;
            }
            if (right < this.maxHeap.length && this.maxHeap[right] > this.maxHeap[largest]) {
                largest = right;
            }
            if (largest !== i) {
                [this.maxHeap[i], this.maxHeap[largest]] = [this.maxHeap[largest], this.maxHeap[i]];
                i = largest;
            } else {
                break;
            }
        }
    }

    getMaxHeapMax() {
        return this.maxHeap[0];
    }

    addToMinHeap(val) {
        this.minHeap.push(val);
        this.bubbleUpMinHeap(this.minHeap.length - 1);
    }

    removeFromMinHeap() {
        const min = this.minHeap[0];
        this.minHeap[0] = this.minHeap[this.minHeap.length - 1];
        this.minHeap.pop();
        if (this.minHeap.length > 0) {
            this.bubbleDownMinHeap(0);
        }
        return min;
    }

    bubbleUpMinHeap(i) {
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.minHeap[i] < this.minHeap[parent]) {
                [this.minHeap[i], this.minHeap[parent]] = [this.minHeap[parent], this.minHeap[i]];
                i = parent;
            } else {
                break;
            }
        }
    }

    bubbleDownMinHeap(i) {
        while (true) {
            let smallest = i;
            const left = 2 * i + 1;
            const right = 2 * i + 2;

            if (left < this.minHeap.length && this.minHeap[left] < this.minHeap[smallest]) {
                smallest = left;
            }
            if (right < this.minHeap.length && this.minHeap[right] < this.minHeap[smallest]) {
                smallest = right;
            }
            if (smallest !== i) {
                [this.minHeap[i], this.minHeap[smallest]] = [this.minHeap[smallest], this.minHeap[i]];
                i = smallest;
            } else {
                break;
            }
        }
    }

    getMinHeapMin() {
        return this.minHeap[0];
    }
}

const mf = new MedianFinder();
mf.addNum(1);
console.log(mf.findMedian()); // 1.0
mf.addNum(2);
console.log(mf.findMedian()); // 1.5
mf.addNum(3);
console.log(mf.findMedian()); // 2.0

// node Grind169/ans/7-11-ans1.js
