var findAnagrams = function (s, p) {
    const result = [];
    if (s.length < p.length) return result;

    const pCount = new Array(26).fill(0);
    const sCount = new Array(26).fill(0);

    // Count characters in p
    for (const char of p) {
        pCount[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    // Sliding window
    for (let i = 0; i < s.length; i++) {
        const charCode = s[i].charCodeAt(0) - "a".charCodeAt(0);
        sCount[charCode]++;

        // Remove the leftmost character when window size exceeds p.length
        if (i >= p.length) {
            const leftCharCode =
                s[i - p.length].charCodeAt(0) - "a".charCodeAt(0);
            sCount[leftCharCode]--;
        }

        // Check if the window is an anagram
        if (
            i >= p.length - 1 &&
            sCount.every((count, idx) => count === pCount[idx])
        ) {
            result.push(i - p.length + 1);
        }
    }

    return result;
};

console.log(findAnagrams("cbaebabacd", "abc")); // [0,6]
console.log(findAnagrams("abab", "ab")); // [0,1,2]
console.log(findAnagrams("a", "a")); // [0]

// node Grind75/7-4_ans.js
