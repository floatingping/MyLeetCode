/*
https://leetcode.com/problems/longest-palindromic-substring/

5. Longest Palindromic Substring

Given a string s, return the longest palindromic substring in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
*/





/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length === 1) return s;

    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        const [l1, r1] = getPalindrome(i, i);
        if (r1 - l1 > end - start) {
            start = l1;
            end = r1;
        }

        const [l2, r2] = getPalindrome(i, i + 1);
        if (r2 - l2 > end - start) {
            start = l2;
            end = r2;
        }
    }

    return s.substring(start, end + 1);

    function getPalindrome(l, r) {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++;
        }
        return [l + 1, r - 1];
    }
};

console.log(longestPalindrome("babad")); // "bab" or "aba"
console.log(longestPalindrome("cbbd")); // "bb"
console.log(longestPalindrome("a")); // "a"
