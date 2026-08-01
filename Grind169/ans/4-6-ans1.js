/*
Medium | 30 mins
4-6. LRU Cache
146. LRU Cache
https://leetcode.com/problems/lru-cache/
*/

class LRUCache {
	/**
	 * @param {number} capacity
	 */
	constructor(capacity) {
		this.capacity = capacity;
		this.cache = new Map(); // key -> value
		this.order = new Map(); // key -> timestamp for LRU ordering
		this.timestamp = 0;
	}

	/**
	 * @param {number} key
	 * @return {number}
	 */
	get(key) {
		if (!this.cache.has(key)) {
			return -1;
		}
		// Update timestamp to mark as recently used
		this.order.set(key, ++this.timestamp);
		return this.cache.get(key);
	}

	/**
	 * @param {number} key
	 * @param {number} value
	 * @return {void}
	 */
	put(key, value) {
		if (this.cache.has(key)) {
			// Update existing key
			this.cache.set(key, value);
			this.order.set(key, ++this.timestamp);
		} else {
			// Add new key
			if (this.cache.size >= this.capacity) {
				// Evict least recently used
				let lruKey = null;
				let minTime = Infinity;
				for (const [k, time] of this.order) {
					if (time < minTime) {
						minTime = time;
						lruKey = k;
					}
				}
				this.cache.delete(lruKey);
				this.order.delete(lruKey);
			}
			this.cache.set(key, value);
			this.order.set(key, ++this.timestamp);
		}
	}
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key, value)
 */

const lruCache = new LRUCache(2);
lruCache.put(1, 1); // null
lruCache.put(2, 2); // null
console.log(lruCache.get(1)); // 1
lruCache.put(3, 3); // null
console.log(lruCache.get(2)); // -1
lruCache.put(4, 4); // null
console.log(lruCache.get(1)); // -1
console.log(lruCache.get(3)); // 3
console.log(lruCache.get(4)); // 4

// node Grind169/ans/4-6-ans1.js
