
/*
https://leetcode.com/problems/basic-calculator
224. Basic Calculator

Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

 

Example 1:

Input: s = "1 + 1"
Output: 2
Example 2:

Input: s = " 2-1 + 2 "
Output: 3
Example 3:

Input: s = "(1+(4+5+2)-3)+(6+8)"
Output: 23
 

Constraints:

1 <= s.length <= 3 * 105
s consists of digits, '+', '-', '(', ')', and ' '.
s represents a valid expression.
'+' is not used as a unary operation (i.e., "+1" and "+(2 + 3)" is invalid).
'-' could be used as a unary operation (i.e., "-1" and "-(2 + 3)" is valid).
There will be no two consecutive operators in the input.
Every number and running calculation will fit in a signed 32-bit integer.
*/



/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let result = 0;
    const stack = [];
    let tmp = 0;
    let sign = 1;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") continue;

        if (s[i].charCodeAt(0) >= 48 && s[i].charCodeAt(0) <= 57) {
            tmp = tmp * 10 + Number(s[i]);
        }

        if (s[i] === "+") {
            result += sign * tmp;
            tmp = 0;
            sign = 1;
        }

        if (s[i] === "-") {
            result += sign * tmp;
            tmp = 0;
            sign = -1;
        }

        if (s[i] === "(") {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
            //tmp = 0; //不需要
        }

        if (s[i] === ")") {
            result += sign * tmp;
            result *= stack.pop();
            result += stack.pop();
            tmp = 0;
        }

    }

    result += sign * tmp;

    return result;
};


console.log(calculate("1 + 1")); //2
console.log(calculate(" 2-1 + 2 ")); //3
console.log(calculate("(1+(4+5+2)-3)+(6+8)")); //23


