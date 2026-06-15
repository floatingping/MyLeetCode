var evalRPN = function (tokens) {
    const stack = [];
    const operators = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => Math.trunc(a / b)
    };

    for (let token of tokens) {
        if (token in operators) {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(operators[token](a, b));
        } else {
            stack.push(parseInt(token));
        }
    }

    return stack[0];
};

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

// node Grind75/3-8_ans.js
