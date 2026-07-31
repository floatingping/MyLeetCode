/*
380. Insert Delete GetRandom O(1)
https://leetcode.com/problems/insert-delete-getrandom-o1/

Implement the RandomizedSet class:
- RandomizedSet() initializes the set.
- insert(val) inserts val if absent and returns true if it was inserted.
- remove(val) removes val if present and returns true if it was removed.
- getRandom() returns a random existing element. Each element must have the same probability of being returned.

Each function must run in average O(1) time.

Example:
Input: ["RandomizedSet", "insert", "remove", "insert", "getRandom"]
	   [[], [1], [2], [2], []]
Output: [null, true, false, true, 2]

Constraints:
- -2^31 <= val <= 2^31 - 1
- At most 2 * 10^5 calls are made to insert, remove, and getRandom.
- getRandom is called only when the set has at least one element.
*/

class RandomizedSet {
	constructor() {

	}

	/** @param {number} val @return {boolean} */
	insert(val) {

	}

	/** @param {number} val @return {boolean} */
	remove(val) {

	}

	/** @return {number} */
	getRandom() {

	}
}

const randomizedSet = new RandomizedSet();
console.log(randomizedSet.insert(1)); // true
console.log(randomizedSet.remove(2)); // false
console.log(randomizedSet.insert(2)); // true
console.log(randomizedSet.getRandom()); // 1 or 2

// node Grind169/7-6.js
