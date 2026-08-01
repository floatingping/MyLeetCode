/*
Medium | 35 mins
208. Implement Trie (Prefix Tree)
https://leetcode.com/problems/implement-trie-prefix-tree/

Implement a prefix tree with insert, search, and startsWith operations for lowercase English words.

Example 1:
Input: ["Trie","insert","search","search","startsWith","insert","search"]
	[[],["apple"],["apple"],["app"],["app"],["app"],["app"]]
Output: [null,null,true,false,true,null,true]
*/

/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let node = this.root;
    
    for (const char of word) {
        if (!node[char]) {
            node[char] = {};
        }
        node = node[char];
    }
    
    node.isEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    const node = this._findNode(word);
    return node !== null && node.isEnd === true;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    return this._findNode(prefix) !== null;
};

/**
 * Helper function to find node for a given word/prefix
 */
Trie.prototype._findNode = function (str) {
    let node = this.root;
    
    for (const char of str) {
        if (!node[char]) {
            return null;
        }
        node = node[char];
    }
    
    return node;
};

const trie = new Trie();
console.log(trie.insert("apple")); // undefined
console.log(trie.search("apple")); // true
console.log(trie.search("app")); // false
console.log(trie.startsWith("app")); // true
console.log(trie.insert("app")); // undefined
console.log(trie.search("app")); // true

// node Grind169/ans/2-20-ans1.js
