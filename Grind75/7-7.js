/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this._capacity = capacity;

    this._map = new Map();

    this._head = new Node(null, null);
    this._tail = new Node(null, null);

    this._head.tail = this._tail;
    this._tail.head = this._head;
};



LRUCache.prototype._add = function (node) {

    const oldHead = this._head.tail;
    oldHead.head = node;

    this._head.tail = node;
    node.head = this._head;
    node.tail = oldHead;
};

LRUCache.prototype._remove = function (node) {
    const head = node.head;
    const tail = node.tail;

    head.tail = tail;
    tail.head = head;
};



/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this._map.has(key)) return -1;
    const node = this._map.get(key);
    this._remove(node);
    this._add(node);

    return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {

    if (this._map.has(key)) {
        const oldNode = this._map.get(key);
        this._remove(oldNode);
    }
    
    const newNode = new Node(key, value);
    this._add(newNode);
    this._map.set(key, newNode);

    if (this._map.size > this._capacity) {
        const oldTail = this._tail.head;
        this._remove(oldTail);
        this._map.delete(oldTail.key);
    }

};

class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.head = null;
        this.tail = null;
    }
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */



const lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4