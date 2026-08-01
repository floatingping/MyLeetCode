/*
Minimum Window Substring - Sliding Window
Time Complexity: O(n)
Space Complexity: O(1) - fixed charset
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (t.length > s.length) return "";

    const tCount = new Map();
    for (const char of t) {
        tCount.set(char, (tCount.get(char) || 0) + 1);
    }

    let required = tCount.size;
    let formed = 0;
    const windowCounts = new Map();

    let left = 0;
    let right = 0;
    let minLen = Infinity;
    let minStart = 0;

    while (right < s.length) {
        const char = s[right];
        windowCounts.set(char, (windowCounts.get(char) || 0) + 1);

        if (tCount.has(char) && windowCounts.get(char) === tCount.get(char)) {
            formed++;
        }

        while (formed === required && left <= right) {
            const char = s[left];

            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minStart = left;
            }

            windowCounts.set(char, windowCounts.get(char) - 1);
            if (tCount.has(char) && windowCounts.get(char) < tCount.get(char)) {
                formed--;
            }

            left++;
        }

        right++;
    }

    return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
};

console.log(minWindow("ADOBECODEBANC", "ABC")); // "BANC"
console.log(minWindow("a", "a")); // "a"
console.log(minWindow("a", "aa")); // ""

// node Grind169/ans/7-8-ans1.js
