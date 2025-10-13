
/*
https://leetcode.com/problems/find-median-from-data-stream/description/

295. Find Median from Data Stream
The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

For example, for arr = [2,3,4], the median is 3.
For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
Implement the MedianFinder class:

MedianFinder() initializes the MedianFinder object.
void addNum(int num) adds the integer num from the data stream to the data structure.
double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.
 

Example 1:

Input
["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]
Output
[null, null, null, 1.5, null, 2.0]

Explanation
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0
 

Constraints:

-105 <= num <= 105
There will be at least one element in the data structure before calling findMedian.
At most 5 * 104 calls will be made to addNum and findMedian.
 

Follow up:

If all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?
If 99% of all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?
*/



class MyHeap {
    constructor(compare) {
        this._compare = compare;
        this._data = [];
    }
    len() {
        return this._data.length;
    }
    push(v) {
        this._data.push(v);
        this._up(this._data.length - 1);
    }
    peek() {
        return this._data.length > 0 ? this._data[0] : null;
    }
    pop() {
        if (this._data.length === 0) return null;
        if (this._data.length === 1) {
            const result = this._data.pop();
            return result;
        }
        const result = this._data[0];
        const tail = this._data.pop();
        this._data[0] = tail;
        this._down(0);
        return result;
    }

    _l(i) {
        return 2 * i + 1;
    }
    _r(i) {
        return 2 * i + 2;
    }
    _p(i) {
        return Math.floor((i - 1) / 2);
    }
    _up(i) {
        while (i !== 0) {
            const p = this._p(i);
            if (this._compare(this._data[i], this._data[p])) {
                [this._data[p], this._data[i]] = [this._data[i], this._data[p]];
                i = p;
            } else {
                break;
            }
        }
    }
    _down(i) {
        while (i < this._data.length) {
            const l = this._l(i);
            const r = this._r(i);
            let next = i;

            if (l < this._data.length && this._compare(this._data[l], this._data[next])) {
                next = l;
            }

            if (r < this._data.length && this._compare(this._data[r], this._data[next])) {
                next = r;
            }

            if (next === i) break;

            [this._data[next], this._data[i]] = [this._data[i], this._data[next]];

            i = next;
        }
    }
}



var MedianFinder = function () {
    this._l = new MyHeap((a, b) => a > b); // max heap
    this._r = new MyHeap((a, b) => a < b); // min heap
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    this._l.push(num);

    if (this._l.peek() > this._r.peek()) {
        this._r.push(this._l.pop());
    }

    if (this._l.len() > this._r.len() + 1) {
        this._r.push(this._l.pop());
    } else if (this._r.len() > this._l.len()) {
        this._l.push(this._r.pop());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    if (this._l.len() > this._r.len()) return this._l.peek();

    return (this._l.peek() + this._r.peek()) / 2;
};



let medianFinder = new MedianFinder();
medianFinder.addNum(1); // arr = [1]
medianFinder.addNum(2); // arr = [1, 2]
console.log(medianFinder.findMedian()); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3); // arr[1, 2, 3]
console.log(medianFinder.findMedian()); // return 2.0 (i.e., 2 / 1)





medianFinder = new MedianFinder();
medianFinder.addNum(6); // arr = [6]
medianFinder.findMedian(); // return 6.0
medianFinder.addNum(10); // arr = [6, 10]
medianFinder.findMedian(); // return 8.0
medianFinder.addNum(2); // arr = [2, 6, 10]
medianFinder.findMedian(); // return 6.0
medianFinder.addNum(6); // arr = [2, 6, 6, 10]
medianFinder.findMedian(); // return 6.0
medianFinder.addNum(5); // arr = [2, 5, 6, 6, 10]
medianFinder.findMedian(); // return 6.0
medianFinder.addNum(0); // arr = [0, 2, 5, 6, 6, 10]
medianFinder.findMedian(); // return 5.5
medianFinder.addNum(6); // arr = [0, 2, 5, 6, 6, 6, 10]
medianFinder.findMedian(); // return 6.0
medianFinder.addNum(3); // arr = [0, 2, 3, 5, 6, 6, 6, 10]
medianFinder.findMedian(); // return 5.5
medianFinder.addNum(1); // arr = [0, 1, 2, 3, 5, 6, 6, 6, 10]
medianFinder.findMedian(); // return 5.0
medianFinder.addNum(0); // arr = [0, 0, 1, 2, 3, 5, 6, 6, 6, 10]
medianFinder.findMedian(); // return 4.0
medianFinder.addNum(0); // arr = [0, 0, 0, 1, 2, 3, 5, 6, 6, 6, 10]
medianFinder.findMedian(); // return 3.0








function getScript(p, a) {
    let result = "";

    for (let i = 0; i < p.length; i++) {
        result += p[i];
        result += `(${a[i].join(",")});\n`;
    }

    return result;
}
