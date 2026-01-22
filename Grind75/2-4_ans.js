var longestPalindrome = function(s) {
    const charCount = {};

    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let length = 0;
    let hasOdd = false;

    for (let count of Object.values(charCount)) {
        if (count % 2 === 0) {
            length += count;
        } else {
            length += count - 1;
            hasOdd = true;
        }
    }

    return hasOdd ? length + 1 : length;
};

console.log(longestPalindrome("abcccccc")); // 7
console.log(longestPalindrome("a")); // 1
console.log(longestPalindrome("Bb")); // 1
console.log(longestPalindrome("ac")); // 1

// node Grind75/2-4_ans.js
