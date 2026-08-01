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

Example 1:
Input: ["TimeMap","set","get","get","set","get","get"]
			 [[],["foo","bar",1],["foo",1],["foo",3],["foo","bar2",4],["foo",4],["foo",5]]
Output: [null,null,"bar","bar",null,"bar2","bar2"]

Constraints:
- 1 <= key.length, value.length <= 100
- key and value consist of lowercase English letters and digits.
- 1 <= timestamp <= 10^7
- Timestamps for each key are strictly increasing.
- At most 2 * 10^5 calls are made to set and get.
*/

/**
 * @class
 */
class TimeMap {
	constructor() {

	}

	/**
	 * @param {string} key
	 * @param {string} value
	 * @param {number} timestamp
	 * @return {void}
	 */
	set(key, value, timestamp) {

	}

	/**
	 * @param {string} key
	 * @param {number} timestamp
	 * @return {string}
	 */
	get(key, timestamp) {

	}
}

const timeMap = new TimeMap();
timeMap.set("foo", "bar", 1);
console.log(timeMap.get("foo", 1)); // "bar"
console.log(timeMap.get("foo", 3)); // "bar"
timeMap.set("foo", "bar2", 4);
console.log(timeMap.get("foo", 4)); // "bar2"
console.log(timeMap.get("foo", 5)); // "bar2"

// node Grind169/3-8.js
