/*
Basic Calculator II - Stack
Time Complexity: O(n)
Space Complexity: O(n)
*/

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    const stack = [];
    let num = 0;
    let operator = '+';

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (isDigit(char)) {
            num = num * 10 + parseInt(char);
        }

        // If it's an operator or last character
        if (isOperator(char) || i === s.length - 1) {
            processOperator(stack, num, operator);
            operator = char;
            num = 0;
        }
    }

    return stack.reduce((a, b) => a + b, 0);
};

function isDigit(char) {
    return char >= '0' && char <= '9';
}

function isOperator(char) {
    return char === '+' || char === '-' || char === '*' || char === '/';
}

function processOperator(stack, num, operator) {
    if (operator === '+') {
        stack.push(num);
    } else if (operator === '-') {
        stack.push(-num);
    } else if (operator === '*') {
        stack.push(stack.pop() * num);
    } else if (operator === '/') {
        const last = stack.pop();
        stack.push(Math.trunc(last / num));
    }
}

console.log(calculate("3+2*2")); // 7
console.log(calculate(" 3/2 ")); // 1
console.log(calculate(" 3+5 / 2 ")); // 5

// node Grind169/ans/7-4-ans1.js
