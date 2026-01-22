var lengthOfLongestSubstring = function(s) {
    const charIndex = {};
    let maxLength = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        if (char in charIndex && charIndex[char] >= left) {
            left = charIndex[char] + 1;
        }

        charIndex[char] = right;
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("")); // 0

// node Grind75/3-4_ans.js
