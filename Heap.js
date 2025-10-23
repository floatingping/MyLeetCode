


class Heap {
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

const myHeap = new Heap((a, b) => a < b);
myHeap.push(5);
myHeap.push(3);
myHeap.push(8);
myHeap.push(1);
myHeap.pop();

console.log(myHeap.peek());


