/*
208. Implement Trie (Prefix Tree)
https://leetcode.com/problems/implement-trie-prefix-tree/

Implement a prefix tree with insert, search, and startsWith operations for lowercase English words.

Example 1:
Input: ["Trie","insert","search","search","startsWith","insert","search"]
	[[],["apple"],["apple"],["app"],["app"],["app"],["app"]]
Output: [null,null,true,false,true,null,true]

Constraints:
- 1 <= word.length, prefix.length <= 2000
- word and prefix consist only of lowercase English letters.
- At most 3 * 10^4 calls will be made to insert, search, and startsWith.
*/

/**
 * Initialize your data structure here.
 */
var Trie = function () {

};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {

};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {

};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {

};

const trie = new Trie();
console.log(trie.insert("apple")); // undefined
console.log(trie.search("apple")); // true
console.log(trie.search("app")); // false
console.log(trie.startsWith("app")); // true
console.log(trie.insert("app")); // undefined
console.log(trie.search("app")); // true

// node Grind169/2-20.js
