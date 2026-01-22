var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.cache = new Map();
};

LRUCache.prototype.get = function (key) {
    if (!this.cache.has(key)) {
        return -1;
    }
    
    const value = this.cache.get(key);
    // Mark as recently used by removing and re-adding
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
};

LRUCache.prototype.put = function (key, value) {
    if (this.cache.has(key)) {
        this.cache.delete(key);
    }
    
    this.cache.set(key, value);
    
    if (this.cache.size > this.capacity) {
        // Remove the least recently used (first) key
        const lruKey = this.cache.keys().next().value;
        this.cache.delete(lruKey);
    }
};

// Test cases
let cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));    // 1
cache.put(3, 3);
console.log(cache.get(2));    // -1
cache.put(4, 4);
console.log(cache.get(1));    // -1
console.log(cache.get(3));    // 3
console.log(cache.get(4));    // 4
