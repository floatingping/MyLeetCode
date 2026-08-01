/*
Medium | 35 mins
3-8. Time Based Key-Value Store
LeetCode 981: https://leetcode.com/problems/time-based-key-value-store/
Difficulty: Medium
Suggested time: 35 mins

Design a time-based key-value store. set(key, value, timestamp) stores a value
for a key at the given timestamp. get(key, timestamp) returns the value for the
largest timestamp_prev such that timestamp_prev <= timestamp, or "" if no such
value exists for the key.
*/

/**
 * @class
 */
class TimeMap {
	constructor() {
		this.map = new Map();
	}

	/**
	 * @param {string} key
	 * @param {string} value
	 * @param {number} timestamp
	 * @return {void}
	 */
	set(key, value, timestamp) {
		if (!this.map.has(key)) {
			this.map.set(key, []);
		}
		this.map.get(key).push([timestamp, value]);
	}

	/**
	 * @param {string} key
	 * @param {number} timestamp
	 * @return {string}
	 */
	get(key, timestamp) {
		if (!this.map.has(key)) {
			return "";
		}
		
		const values = this.map.get(key);
		
		// Binary search for the largest timestamp <= given timestamp
		let left = 0;
		let right = values.length - 1;
		
		while (left <= right) {
			const mid = Math.floor((left + right) / 2);
			if (values[mid][0] <= timestamp) {
				left = mid + 1;
			} else {
				right = mid - 1;
			}
		}
		
		return right >= 0 ? values[right][1] : "";
	}
}

const timeMap = new TimeMap();
timeMap.set("foo", "bar", 1);
console.log(timeMap.get("foo", 1)); // "bar"
console.log(timeMap.get("foo", 3)); // "bar"
timeMap.set("foo", "bar2", 4);
console.log(timeMap.get("foo", 4)); // "bar2"
console.log(timeMap.get("foo", 5)); // "bar2"

// node Grind169/ans/3-8-ans1.js
