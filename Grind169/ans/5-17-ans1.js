/*
Medium | 25 mins
LeetCode #22. Generate Parentheses
https://leetcode.com/problems/generate-parentheses/

Given n pairs of parentheses, write a function that generates all combinations of well-formed parentheses.
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const result = [];
    
    const backtrack = (open, close, current) => {
        // Base case: if we've used all pairs
        if (open === n && close === n) {
            result.push(current);
            return;
        }
        
        // Add opening parenthesis if we haven't used all
        if (open < n) {
            backtrack(open + 1, close, current + '(');
        }
        
        // Add closing parenthesis if we have more opening than closing
        if (close < open) {
            backtrack(open, close + 1, current + ')');
        }
    };
    
    backtrack(0, 0, '');
    return result;
};

console.log(generateParenthesis(3)); // ["((()))", "(()())", "(())()", "()(())", "()()()"]
console.log(generateParenthesis(1)); // ["()"]

// node Grind169/ans/5-17-ans1.js
