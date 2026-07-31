/*
4-15. Design Add and Search Words Data Structure
211. Design Add and Search Words Data Structure
https://leetcode.com/problems/design-add-and-search-words-data-structure/

Design a data structure that supports adding new words and finding whether a string matches any previously added string.

Implement the WordDictionary class:
- WordDictionary() initializes the object.
- void addWord(word) adds word to the data structure, where it can be matched later.
- bool search(word) returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.', where dots can be matched with any letter.

Example 1:

Input: ["WordDictionary", "addWord", "addWord", "addWord", "search", "search", "search", "search"]
[[], ["bad"], ["dad"], ["mad"], ["pad"], ["bad"], [".ad"], ["b.."]]
Output: [null, null, null, null, false, true, true, true]

Constraints:

1 <= word.length <= 25
word in addWord consists of lowercase English letters.
word in search consists of '.' or lowercase English letters.
There will be at most 2 dots in word for search queries.
At most 10^4 calls will be made to addWord and search.
*/

class WordDictionary {
	constructor() {



	}

	/**
	 * @param {string} word
	 * @return {void}
	 */
	addWord(word) {



	}

	/**
	 * @param {string} word
	 * @return {boolean}
	 */
	search(word) {



	}
}

const wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
console.log(wordDictionary.search("pad")); // false
console.log(wordDictionary.search(".ad")); // true
console.log(wordDictionary.search("b..")); // true


// node Grind169/4-15.js
