var calculate = function (s) {
    let result = 0;
    let num = 0;
    let sign = 1;
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (/\d/.test(char)) {
            num = num * 10 + Number(char);
            continue;
        }

        if (char === "+") {
            result += sign * num;
            num = 0;
            sign = 1;
            continue;
        }

        if (char === "-") {
            result += sign * num;
            num = 0;
            sign = -1;
            continue;
        }

        if (char === "(") {
            stack.push(result);
            stack.push(sign);
            result = 0;
            num = 0;
            sign = 1;
            continue;
        }

        if (char === ")") {
            result += sign * num;
            num = 0;
            result *= stack.pop();
            result += stack.pop();
        }
    }

    return result + sign * num;
};

console.log(calculate("1 + 1")); // 2
console.log(calculate(" 2-1 + 2 ")); // 3
console.log(calculate("(1+(4+5+2)-3)+(6+8)")); // 23
console.log(calculate("2-(5-6)")); // 3

// node Grind75/8-7_ans.js
