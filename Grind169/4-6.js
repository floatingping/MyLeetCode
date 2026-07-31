/*
4-6. LRU Cache
146. LRU Cache
https://leetcode.com/problems/lru-cache/

Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:
- LRUCache(int capacity) initializes the cache with a positive size capacity.
- int get(int key) returns the value of the key if the key exists, otherwise returns -1.
- void put(int key, int value) updates the value of the key if it exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds capacity, evict the least recently used key.

The functions get and put must each run in O(1) average time complexity.

Example 1:

Input: ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1,1], [2,2], [1], [3,3], [2], [4,4], [1], [3], [4]]
Output: [null, null, null, 1, null, -1, null, -1, 3, 4]

Constraints:

1 <= capacity <= 3000
0 <= key <= 10^4
0 <= value <= 10^5
At most 2 * 10^5 calls will be made to get and put.
*/

class LRUCache {
	/**
	 * @param {number} capacity
	 */
	constructor(capacity) {



	}

	/**
	 * @param {number} key
	 * @return {number}
	 */
	get(key) {



	}

	/**
	 * @param {number} key
	 * @param {number} value
	 * @return {void}
	 */
	put(key, value) {



	}
}

const lruCache = new LRUCache(2);
lruCache.put(1, 1);
lruCache.put(2, 2);
console.log(lruCache.get(1)); // 1
lruCache.put(3, 3);
console.log(lruCache.get(2)); // -1
lruCache.put(4, 4);
console.log(lruCache.get(4)); // 4


// node Grind169/4-6.js
