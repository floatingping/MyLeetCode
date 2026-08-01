/*
Medium | 30 mins
4-1. Letter Combinations of a Phone Number
17. Letter Combinations of a Phone Number
https://leetcode.com/problems/letter-combinations-of-a-phone-number/
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
	if (digits.length === 0) return [];
	
	const phoneMap = new Map([
		['2', 'abc'],
		['3', 'def'],
		['4', 'ghi'],
		['5', 'jkl'],
		['6', 'mno'],
		['7', 'pqrs'],
		['8', 'tuv'],
		['9', 'wxyz'],
	]);
	
	const result = [];
	
	const backtrack = (index, currentCombination) => {
		if (index === digits.length) {
			result.push(currentCombination);
			return;
		}
		
		const letters = phoneMap.get(digits[index]);
		for (const letter of letters) {
			backtrack(index + 1, currentCombination + letter);
		}
	};
	
	backtrack(0, '');
	return result;
};

console.log(letterCombinations("23")); // ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
console.log(letterCombinations("")); // []
console.log(letterCombinations("2")); // ["a", "b", "c"]

// node Grind169/ans/4-1-ans1.js
