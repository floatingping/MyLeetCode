/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {

    if (p.length > s.length) return [];

    const sCount = new Array(26).fill(0);
    const pCount = new Array(26).fill(0);

    for (let i = 0; i < p.length; i++) {
        sCount[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;
        pCount[p[i].charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    const result = [];
    for (let i = 0; i < s.length - p.length + 1; i++) {
        if (isEqual(sCount, pCount)) {
            result.push(i);
        }

        if (i + p.length < s.length) {
            sCount[s[i].charCodeAt(0) - "a".charCodeAt(0)]--;
            sCount[s[i + p.length].charCodeAt(0) - "a".charCodeAt(0)]++;
        }
    }

    return result;

    function isEqual(a, b) {
        for (let i = 0; i < 26; i++) {
            if (a[i] != b[i]) return false;
        }
        return true;
    }
};

console.log(findAnagrams("cbaebabacd", "abc")); // [0,6]
console.log(findAnagrams("abab", "ab")); // [0,1,2]
console.log(findAnagrams("a", "ab")); // []
console.log(findAnagrams("baa", "aa")); // [1]




