/*
Medium | 25 mins
271. Encode and Decode Strings
https://leetcode.com/problems/encode-and-decode-strings/
Reference: https://leetcode.ca/all/271.html
Difficulty: Medium | Suggested time: 25 mins

Design an algorithm to encode a list of strings into one string and decode the
encoded string back to the original list. The strings may contain any valid
ASCII characters, so the encoding must preserve delimiters and empty strings.

Example 1:
Input: strs = ["Hello", "World"]
Output: ["Hello", "World"]
Explanation: decode(encode(strs)) returns the original list.

Example 2:
Input: strs = ["", "a#b", "#"]
Output: ["", "a#b", "#"]

Constraints:
- 0 <= strs.length <= 200
- 0 <= strs[i].length <= 200
- strs[i] contains any valid ASCII characters.
*/

/**
 * Initializes the codec.
 */
var Codec = function () {

};

/**
 * @param {string[]} strs
 * @return {string}
 */
Codec.prototype.encode = function (strs) {

};

/**
 * @param {string} s
 * @return {string[]}
 */
Codec.prototype.decode = function (s) {

};

const codec = new Codec();
const encodedStrings = codec.encode(["Hello", "World"]);
console.log(encodedStrings); // An implementation-defined encoded string
console.log(codec.decode(encodedStrings)); // ["Hello", "World"]
console.log(codec.decode(codec.encode(["", "a#b", "#"]))); // ["", "a#b", "#"]

// node Grind169/6-18.js
