/*
Medium | 30 mins
4-20. Top K Frequent Words
692. Top K Frequent Words
https://leetcode.com/problems/top-k-frequent-words/
*/

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
	// Count frequency of each word
	const freqMap = new Map();
	for (const word of words) {
		freqMap.set(word, (freqMap.get(word) || 0) + 1);
	}
	
	// Convert to array and sort by frequency (descending) and lexicographically (ascending)
	const sorted = Array.from(freqMap).sort((a, b) => {
		if (a[1] !== b[1]) {
			return b[1] - a[1]; // Higher frequency first
		}
		return a[0].localeCompare(b[0]); // Lexicographical order for same frequency
	});
	
	// Return top k words
	return sorted.slice(0, k).map(item => item[0]);
};

console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2)); // ["i", "love"]
console.log(topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4)); // ["the", "is", "sunny", "day"]
console.log(topKFrequent(["a", "b", "a", "c", "b"], 2)); // ["a", "b"]

// node Grind169/ans/4-20-ans1.js
