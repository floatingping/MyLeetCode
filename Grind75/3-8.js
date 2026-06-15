/*
33. Evaluate Reverse Polish Notation
https://leetcode.com/problems/evaluate-reverse-polish-notation/

Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, and /. Each operand may be an integer or another expression.

Note that division between two integers should truncate toward zero.

It is guaranteed that the given RPN expression is always valid. That means:
- The expression is always valid
- The answer and all the intermediate calculations can be represented by a 32-bit integer.

Example 1:
Input: tokens = ["2","1","+","2","*"]
Output: 4
Explanation: ((2 + 1) * 2) = 6 / 3 = 2

Example 2:
Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 4 + 2 = 6

Constraints:
1 <= tokens.length <= 104
tokens[i] is either an operator: "+", "-", "*", or "/" or an integer in the range [-200, 200].
*/

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {};

console.log(evalRPN(["2", "1", "+", "2", "*"])); // 6
console.log(evalRPN(["4", "13", "5", "/", "+"])); // 6
console.log(
    evalRPN([
        "10",
        "6",
        "9",
        "3",
        "+",
        "-11",
        "*",
        "/",
        "*",
        "17",
        "+",
        "5",
        "+"
    ])
); // 22

// node Grind75/3-8.js
