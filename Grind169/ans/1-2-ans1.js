/*
Valid Parentheses - Using Stack
Time Complexity: O(n)
Space Complexity: O(n)
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    const pairs = new Map([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ]);

    for (let char of s) {
        if (pairs.has(char)) {
            if (stack.length === 0 || stack.pop() !== pairs.get(char)) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false

// node Grind169/ans/1-2-ans1.js
