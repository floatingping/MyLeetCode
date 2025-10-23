function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

class MyHeap {
    constructor(comparator) {
        this._data = [];
        this._comparator = comparator;
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

    peek() {
        if (this._data.length === 0) return null;
        return this._data[0];
    }

    len() {
        return this._data.length;
    }

    push(v) {
        this._data.push(v);
        let i = this._data.length - 1;
        while (i > 0) {
            const p = this._p(i);
            if (this._comparator(this._data[p], this._data[i])) {
                [this._data[i], this._data[p]] = [this._data[p], this._data[i]];
                i = p;
            } else {
                break;
            }
        }
    }

    pop() {
        if (this._data.length === 0) return null;
        if (this._data.length === 1) return this._data.pop();

        const result = this._data[0];
        this._data[0] = this._data.pop();

        let i = 0;
        while (true) {
            const l = this._l(i);
            const r = this._r(i);
            let next = i;
            if (l < this._data.length && this._comparator(this._data[next], this._data[l])) {
                next = l;
            }

            if (r < this._data.length && this._comparator(this._data[next], this._data[r])) {
                next = r;
            }

            if (next === i) break;
            [this._data[i], this._data[next]] = [this._data[next], this._data[i]];
            i = next;
        }

        return result;
    }
}

//
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length === 0) return null;

    const heap = new MyHeap((a, b) => b.val < a.val);
    for (let i = 0; i < lists.length; i++) {
        if (lists[i]) heap.push(lists[i]);
    }

    const dummy = new ListNode();
    let cur = dummy;

    while (heap.len() > 0) {
        const node = heap.pop();
        cur.next = node;
        cur = cur.next;

        if (node.next) {
            heap.push(node.next);
        }
    }

    return dummy.next;















    // 一直比較最小值版
    // if (lists.length === 0) return null;

    // const dummy = new ListNode(null, null);
    // let cur = dummy;

    // while (lists.some(n => n)) {
    //     let min = null;
    //     let minIdx = null;

    //     for (let i = 0; i < lists.length; i++) {
    //         if (lists[i] === null) continue;
    //         if (min === null) {
    //             min = lists[i].val;
    //             minIdx = i;
    //         } else {
    //             if (lists[i].val < min) {
    //                 min = lists[i].val;
    //                 minIdx = i;
    //             }
    //         }
    //     }

    //     cur.next = lists[minIdx];
    //     cur = cur.next;
    //     lists[minIdx] = lists[minIdx].next;
    // }

    // return dummy.next;
};



const node00 = new ListNode(1);
const node01 = new ListNode(4);
const node02 = new ListNode(5);
node00.next = node01;
node01.next = node02;


const node10 = new ListNode(1);
const node11 = new ListNode(3);
const node12 = new ListNode(4);
node10.next = node11;
node11.next = node12;

const node20 = new ListNode(2);
const node21 = new ListNode(6);
node20.next = node21;

console.log(mergeKLists([node00, node10, node20]));



