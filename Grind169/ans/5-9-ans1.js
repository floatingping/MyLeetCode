/*
Medium | 30 mins
LeetCode #394. Decode String
https://leetcode.com/problems/decode-string/

Given an encoded string, return its decoded string. The encoding rule is k[encoded_string],
where the string inside the brackets repeats exactly k times.
*/

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ']') {
            stack.push(s[i]);
        } else {
            // Pop characters until we find '['
            let str = '';
            while (stack.length > 0 && stack[stack.length - 1] !== '[') {
                str = stack.pop() + str;
            }
            
            // Pop the '['
            stack.pop();
            
            // Extract the number
            let numStr = '';
            while (stack.length > 0 && /\d/.test(stack[stack.length - 1])) {
                numStr = stack.pop() + numStr;
            }
            
            const num = parseInt(numStr);
            stack.push(str.repeat(num));
        }
    }
    
    return stack.join('');
};

console.log(decodeString("3[a]2[bc]")); // "aaabcbc"
console.log(decodeString("3[a2[c]]")); // "accaccacc"
console.log(decodeString("2[abc]3[cd]ef")); // "abcabccdcdcdef"

// node Grind169/ans/5-9-ans1.js
