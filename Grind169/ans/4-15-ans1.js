/*
Medium | 35 mins
4-15. Design Add and Search Words Data Structure
211. Design Add and Search Words Data Structure
https://leetcode.com/problems/design-add-and-search-words-data-structure/
*/

class TrieNode {
	constructor() {
		this.children = new Map();
		this.isEndOfWord = false;
	}
}

class WordDictionary {
	constructor() {
		this.root = new TrieNode();
	}

	/**
	 * @param {string} word
	 * @return {void}
	 */
	addWord(word) {
		let node = this.root;
		for (const char of word) {
			if (!node.children.has(char)) {
				node.children.set(char, new TrieNode());
			}
			node = node.children.get(char);
		}
		node.isEndOfWord = true;
	}

	/**
	 * @param {string} word
	 * @return {boolean}
	 */
	search(word) {
		return this.searchDFS(word, 0, this.root);
	}
	
	searchDFS(word, index, node) {
		if (index === word.length) {
			return node.isEndOfWord;
		}
		
		const char = word[index];
		
		if (char === '.') {
			// Try all possible characters
			for (const childNode of node.children.values()) {
				if (this.searchDFS(word, index + 1, childNode)) {
					return true;
				}
			}
			return false;
		} else {
			// Match specific character
			if (!node.children.has(char)) {
				return false;
			}
			return this.searchDFS(word, index + 1, node.children.get(char));
		}
	}
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

const dict = new WordDictionary();
dict.addWord("bad");
dict.addWord("dad");
dict.addWord("mad");
console.log(dict.search("pad")); // false
console.log(dict.search("bad")); // true
console.log(dict.search(".ad")); // true
console.log(dict.search("b..")); // true

// node Grind169/ans/4-15-ans1.js
