/*
5-6. Time Based Key-Value Store
https://leetcode.com/problems/time-based-key-value-store/

Design a time-based key-value data structure that supports:

1. Storing multiple values for the same key at different time stamps, and
2. Retrieving the value of a given key at a certain timestamp.

Implement the TimeMap class:

- TimeMap() Initializes the object of the data structure.
- void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
- String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there is no value associated with timestamp_prev, it returns an empty string ("").

Example 1:

Input
["TimeMap", "set", "get", "get", "set", "get", "get"]
[[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "baz", 3], ["foo", 3], ["foo", 4]]

Output
[null, null, "bar", "bar", null, "baz", "baz"]

Constraints:

1 <= key.length, value.length <= 100
key and value consist of lowercase English letters and digits.
1 <= timestamp <= 3 * 107
All the timestamps timestamp of set are strictly increasing.
1 <= timestamp <= 3 * 107
*/

var TimeMap = function () {};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key, value, timestamp)
 * var param_2 = obj.get(key, timestamp)
 */

// Test cases
let timeMap = new TimeMap();
timeMap.set("foo", "bar", 1);
console.log(timeMap.get("foo", 1)); // "bar"
console.log(timeMap.get("foo", 3)); // "bar"
timeMap.set("foo", "baz", 3);
console.log(timeMap.get("foo", 3)); // "baz"
console.log(timeMap.get("foo", 4)); // "baz"

// node Grind75/5-6.js
