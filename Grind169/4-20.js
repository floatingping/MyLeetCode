/*
Medium | 30 mins
4-20. Top K Frequent Words
692. Top K Frequent Words
https://leetcode.com/problems/top-k-frequent-words/

Given an array of strings words and an integer k, return the k most frequent strings.

Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

Example 1:

Input: words = ["i","love","leetcode","i","love","coding"], k = 2
Output: ["i","love"]
Explanation: "i" and "love" are the two most frequent words. "i" comes before "love" because "i" has a lower alphabetical order.
Example 2:

Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
Output: ["the","is","sunny","day"]
Explanation: "the", "is", "sunny", and "day" are the four most frequent words, ordered by frequency and then lexicographical order.

Constraints:

1 <= words.length <= 500
1 <= words[i].length <= 10
words[i] consists of lowercase English letters.
1 <= k <= The number of unique words[i]
*/

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {



};

console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2)); // ["i", "love"]
console.log(topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4)); // ["the", "is", "sunny", "day"]
console.log(topKFrequent(["a", "b", "a", "c", "b"], 2)); // ["a", "b"]


// node Grind169/4-20.js
