/*
Basic Calculator - Stack + Recursion
Time Complexity: O(n)
Space Complexity: O(n)
*/

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let i = 0;

    function parseNumber() {
        let num = 0;
        while (i < s.length && isDigit(s[i])) {
            num = num * 10 + parseInt(s[i]);
            i++;
        }
        return num;
    }

    function parseExpression() {
        const stack = [];
        let sign = '+';

        while (i < s.length) {
            const char = s[i];

            if (char === '(') {
                i++; // skip '('
                stack.push(sign);
                sign = '+';
            } else if (char === ')') {
                i++; // skip ')'
                const val = stack.pop();
                let result = 0;
                let tempSign = '+';
                while (stack.length > 0 && typeof stack[stack.length - 1] !== 'string') {
                    if (tempSign === '+') {
                        result += stack.pop();
                    } else if (tempSign === '-') {
                        result -= stack.pop();
                    }
                }
                if (sign === '+') {
                    stack.push(result);
                } else if (sign === '-') {
                    stack.push(-result);
                }
                return result;
            } else if (isDigit(char)) {
                const num = parseNumber();
                if (sign === '+') {
                    stack.push(num);
                } else if (sign === '-') {
                    stack.push(-num);
                }
            } else if (char === '+' || char === '-') {
                sign = char;
                i++;
            } else {
                i++;
            }
        }

        return stack.reduce((a, b) => a + b, 0);
    }

    return parseExpression();
};

function isDigit(char) {
    return char >= '0' && char <= '9';
}

console.log(calculate("1 + 1")); // 2
console.log(calculate(" 2-1 + 2 ")); // 3
console.log(calculate("(1+(4+5+2)-3)+(6+8)")); // 23

// node Grind169/ans/7-13-ans1.js
