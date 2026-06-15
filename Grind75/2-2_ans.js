var canConstruct = function (ransomNote, magazine) {
    const charCount = {};

    for (let char of magazine) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of ransomNote) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    return true;
};

console.log(canConstruct("a", "b")); // false
console.log(canConstruct("a", "a")); // true
console.log(canConstruct("aa", "ab")); // false
console.log(canConstruct("aa", "aab")); // true

// node Grind75/2-2_ans.js
