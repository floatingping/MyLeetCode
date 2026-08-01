/*
Medium | 25 mins
4-13. Group Anagrams
49. Group Anagrams
https://leetcode.com/problems/group-anagrams/
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
	const map = new Map();
	
	for (const str of strs) {
		// Sort characters to get canonical form of anagram
		const sorted = str.split('').sort().join('');
		
		if (!map.has(sorted)) {
			map.set(sorted, []);
		}
		map.get(sorted).push(str);
	}
	
	// Return all groups
	return Array.from(map.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
console.log(groupAnagrams([""])); // [[""]]
console.log(groupAnagrams(["a"])); // [["a"]]

// node Grind169/ans/4-13-ans1.js
