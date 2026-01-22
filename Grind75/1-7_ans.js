var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const charCount = {};

    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of t) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    return true;
};

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("a", "a")); // true
console.log(isAnagram("ab", "a")); // false

// node Grind75/1-7_ans.js
