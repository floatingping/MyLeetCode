/*
Medium | 25 mins
271. Encode and Decode Strings
https://leetcode.com/problems/encode-and-decode-strings/

Design an algorithm to encode a list of strings into one string and decode
back to the original list.

Strategy: Chunked encoding with length prefix
- Encode: prefix each string with its length and a delimiter
- Format: "length#string" for each string concatenated
- Decode: read length, then read that many characters for string
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
    let encoded = '';
    for (let str of strs) {
        // Format: length + "#" + string
        encoded += str.length + '#' + str;
    }
    return encoded;
};

/**
 * @param {string} s
 * @return {string[]}
 */
Codec.prototype.decode = function (s) {
    const strs = [];
    let i = 0;
    
    while (i < s.length) {
        // Find the "#" delimiter
        let j = i;
        while (j < s.length && s[j] !== '#') {
            j++;
        }
        
        // Extract length
        const length = parseInt(s.substring(i, j));
        
        // Extract string (skip the "#")
        const str = s.substring(j + 1, j + 1 + length);
        strs.push(str);
        
        // Move to next string
        i = j + 1 + length;
    }
    
    return strs;
};

const codec = new Codec();
const encodedStrings = codec.encode(["Hello", "World"]);
console.log(encodedStrings); // "5#Hello5#World"
console.log(codec.decode(encodedStrings)); // ["Hello", "World"]
console.log(codec.decode(codec.encode(["", "a#b", "#"]))); // ["", "a#b", "#"]

// node Grind169/ans/6-18-ans1.js
