var longestPalindrome = function (s) {
    if (s.length < 2) return s;
    
    let start = 0, maxLen = 1;
    
    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1; // length of palindrome
    };
    
    for (let i = 0; i < s.length; i++) {
        // Odd length palindromes
        const len1 = expandAroundCenter(i, i);
        // Even length palindromes
        const len2 = expandAroundCenter(i, i + 1);
        
        const len = Math.max(len1, len2);
        
        if (len > maxLen) {
            maxLen = len;
            start = i - Math.floor((len - 1) / 2);
        }
    }
    
    return s.substring(start, start + maxLen);
};

console.log(longestPalindrome("babad"));    // "bab" or "aba"
console.log(longestPalindrome("cbbd"));     // "bb"
console.log(longestPalindrome("a"));        // "a"
console.log(longestPalindrome("ac"));       // "a" or "c"

// node Grind75/6-7_ans.js
