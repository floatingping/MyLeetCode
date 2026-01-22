var calculate = function (s) {
    let stack = [0];
    let num = 0;
    let sign = '+';
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (/\d/.test(char)) {
            num = num * 10 + parseInt(char);
        }
        
        if (char === '(') {
            const j = findMatchingParen(s, i);
            num = calculate(s.substring(i + 1, j));
            i = j;
        }
        
        if (['+', '-', ')', ' '].includes(char) && /\d/.test(s[i - 1]) || i === s.length - 1) {
            if (sign === '+') {
                stack.push(num);
            } else if (sign === '-') {
                stack.push(-num);
            }
            
            if (char === '+' || char === '-') {
                sign = char;
            }
            num = 0;
        }
    }
    
    return stack.reduce((a, b) => a + b, 0);
};

const findMatchingParen = (s, start) => {
    let count = 1;
    for (let i = start + 1; i < s.length; i++) {
        if (s[i] === '(') count++;
        if (s[i] === ')') {
            count--;
            if (count === 0) return i;
        }
    }
    return -1;
};

console.log(calculate("1 + 1"));              // 2
console.log(calculate(" 2-1 + 2 "));          // 3
console.log(calculate("(1+(4+5+2)-3)+(6+8)")); // 23
console.log(calculate("2-(5-6)"));            // 3
