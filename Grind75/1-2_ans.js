var isValid = function (s) {
    const stack = [];
    const map = {
        ")": "(",
        "}": "{",
        "]": "["
    };

    for (let char of s) {
        if (map[char]) {
            if (stack.length === 0 || stack[stack.length - 1] !== map[char]) {
                return false;
            }
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true

// node Grind75/1-2_ans.js
