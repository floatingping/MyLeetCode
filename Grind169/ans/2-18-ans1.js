/*
Medium | 30 mins
150. Evaluate Reverse Polish Notation
https://leetcode.com/problems/evaluate-reverse-polish-notation/

Evaluate an arithmetic expression written in reverse Polish notation and return the integer result.

Example 1:
Input: tokens = ["2","1","+","3","*"]
Output: 9

Example 2:
Input: tokens = ["4","13","5","/","+"]
Output: 6
*/

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = [];
    const operators = new Set(['+', '-', '*', '/']);
    
    for (const token of tokens) {
        if (operators.has(token)) {
            const b = stack.pop();
            const a = stack.pop();
            let result;
            
            switch (token) {
                case '+':
                    result = a + b;
                    break;
                case '-':
                    result = a - b;
                    break;
                case '*':
                    result = a * b;
                    break;
                case '/':
                    result = Math.trunc(a / b); // Truncate towards zero
                    break;
            }
            
            stack.push(result);
        } else {
            stack.push(parseInt(token));
        }
    }
    
    return stack[0];
};

console.log(evalRPN(["2", "1", "+", "3", "*"])); // 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // 6

// node Grind169/ans/2-18-ans1.js
