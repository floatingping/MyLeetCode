var Trie = function () {
    this.root = {};
};

Trie.prototype.insert = function (word) {
    let node = this.root;
    for (let char of word) {
        if (!node[char]) {
            node[char] = {};
        }
        node = node[char];
    }
    node.isEnd = true;
};

Trie.prototype.search = function (word) {
    let node = this._findNode(word);
    return node !== null && node.isEnd === true;
};

Trie.prototype.startsWith = function (prefix) {
    return this._findNode(prefix) !== null;
};

Trie.prototype._findNode = function (word) {
    let node = this.root;
    for (let char of word) {
        if (!node[char]) {
            return null;
        }
        node = node[char];
    }
    return node;
};

// Test cases
let trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));   // true
console.log(trie.search("app"));     // false
console.log(trie.startsWith("app")); // true
trie.insert("app");
console.log(trie.search("app"));     // true

// node Grind75/4-2_ans.js
