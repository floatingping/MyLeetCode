/*
Hard | 40 mins
336. Palindrome Pairs
使用HashMap + 字符串匹配
*/

var palindromePairs = function (words) {
	const wordMap = new Map();

	// 建立单词到索引的映射
	for (let i = 0; i < words.length; i++) {
		wordMap.set(words[i], i);
	}

	const result = [];

	for (let i = 0; i < words.length; i++) {
		const word = words[i];

		// 检查是否可以与其他单词组合成回文
		for (let j = 0; j <= word.length; j++) {
			const prefix = word.substring(0, j);
			const suffix = word.substring(j);

			// 如果后缀是回文，查找反转的前缀
			if (isPalindrome(suffix)) {
				const reversedPrefix = [...prefix].reverse().join("");
				if (wordMap.has(reversedPrefix) && wordMap.get(reversedPrefix) !== i) {
					result.push([wordMap.get(reversedPrefix), i]);
				}
			}

			// 如果前缀是回文，查找反转的后缀
			if (j !== word.length && isPalindrome(prefix)) {
				const reversedSuffix = [...suffix].reverse().join("");
				if (wordMap.has(reversedSuffix) && wordMap.get(reversedSuffix) !== i) {
					result.push([i, wordMap.get(reversedSuffix)]);
				}
			}
		}
	}

	return result;
};

const isPalindrome = (s) => {
	let left = 0,
		right = s.length - 1;
	while (left < right) {
		if (s[left] !== s[right]) {
			return false;
		}
		left++;
		right--;
	}
	return true;
};

console.log(palindromePairs(["abcd", "dcba", "lls", "s", "sssll"])); // [[0, 1], [1, 0], [3, 2], [2, 4]]
console.log(palindromePairs(["bat", "tab", "cat"])); // [[0, 1], [1, 0]]

// node Grind169/ans/8-11-ans1.js
