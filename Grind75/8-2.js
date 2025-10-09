/*
https://leetcode.com/problems/minimum-window-substring/description/

76. Minimum Window Substring

Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 

Constraints:

m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.
 
*/






/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {

    const need = {};
    const win = {};

    for (let i = 0; i < t.length; i++) {
        need[t[i]] = (need[t[i]] ?? 0) + 1;

        win[t[i]] = 0;
    }

    const needChars = Object.keys(need).reduce((a, c) => a + 1, 0);

    let l = 0;
    let r = 0;
    let minLen = Infinity;
    let matchs = 0;

    let resultL = null;
    let resultR = null;


    while (r < s.length) {

        if (need[s[r]] > 0) {
            win[s[r]]++;

            if (win[s[r]] === need[s[r]]) {
                matchs++;
            }
        }

        while (matchs === needChars) {
            const len = r - l + 1;
            if (len < minLen) {
                minLen = len;
                resultL = l;
                resultR = r;
            }


            l++;
            if (need[s[l - 1]] > 0) {
                if (win[s[l - 1]] === need[s[l - 1]]) {
                    matchs--;
                }
                win[s[l - 1]]--;
            }
        }

        r++;
    }


    return minLen === Infinity ? "" : s.substring(resultL, resultR + 1);


};


console.log(minWindow("EBANC", "ABC")); // "BANC"
console.log(minWindow("ADOBECODEBANC", "ABC")); // "BANC"
console.log(minWindow("a", "a")); // "a"
console.log(minWindow("a", "aa")); // ""
