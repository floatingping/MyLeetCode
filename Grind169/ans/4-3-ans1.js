/*
Medium | 30 mins
4-3. Find All Anagrams in a String
438. Find All Anagrams in a String
https://leetcode.com/problems/find-all-anagrams-in-a-string/
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
	if (p.length > s.length) return [];
	
	const result = [];
	const pCount = new Map();
	const windowCount = new Map();
	
	// Initialize pCount
	for (const char of p) {
		pCount.set(char, (pCount.get(char) || 0) + 1);
	}
	
	let left = 0;
	let right = 0;
	
	while (right < s.length) {
		const rightChar = s[right];
		windowCount.set(rightChar, (windowCount.get(rightChar) || 0) + 1);
		right++;
		
		// When window size equals p.length, check if it matches
		if (right - left === p.length) {
			if (mapsEqual(windowCount, pCount)) {
				result.push(left);
			}
			
			// Remove leftmost character
			const leftChar = s[left];
			windowCount.set(leftChar, windowCount.get(leftChar) - 1);
			if (windowCount.get(leftChar) === 0) {
				windowCount.delete(leftChar);
			}
			left++;
		}
	}
	
	return result;
};

const mapsEqual = (map1, map2) => {
	if (map1.size !== map2.size) return false;
	for (const [key, value] of map1) {
		if (map2.get(key) !== value) return false;
	}
	return true;
};

console.log(findAnagrams("cbaebabacd", "abc")); // [0, 6]
console.log(findAnagrams("abab", "ab")); // [0, 1, 2]
console.log(findAnagrams("baa", "aa")); // [1]

// node Grind169/ans/4-3-ans1.js
