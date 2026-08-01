/*
Insert Delete GetRandom O(1) - Array + Map
Time Complexity: O(1) average
Space Complexity: O(n)
*/

class RandomizedSet {
    constructor() {
        this.map = new Map();  // val -> index in array
        this.array = [];
    }

    /** @param {number} val @return {boolean} */
    insert(val) {
        if (this.map.has(val)) {
            return false;
        }
        this.array.push(val);
        this.map.set(val, this.array.length - 1);
        return true;
    }

    /** @param {number} val @return {boolean} */
    remove(val) {
        if (!this.map.has(val)) {
            return false;
        }

        const index = this.map.get(val);
        const lastVal = this.array[this.array.length - 1];

        // Move last element to the position of element to remove
        this.array[index] = lastVal;
        this.map.set(lastVal, index);

        // Remove last element
        this.array.pop();
        this.map.delete(val);

        return true;
    }

    /** @return {number} */
    getRandom() {
        const randomIndex = Math.floor(Math.random() * this.array.length);
        return this.array[randomIndex];
    }
}

const randomizedSet = new RandomizedSet();
console.log(randomizedSet.insert(1)); // true
console.log(randomizedSet.remove(2)); // false
console.log(randomizedSet.insert(2)); // true
console.log(randomizedSet.getRandom()); // 1 or 2

// node Grind169/ans/7-6-ans1.js
