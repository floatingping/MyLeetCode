var myAtoi = function (s) {
    let i = 0;
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;
    
    // Skip leading whitespace
    while (i < s.length && s[i] === ' ') {
        i++;
    }
    
    // Check sign
    let sign = 1;
    if (i < s.length && (s[i] === '+' || s[i] === '-')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }
    
    // Read digits
    let result = 0;
    while (i < s.length && /\d/.test(s[i])) {
        const digit = parseInt(s[i]);
        
        // Check for overflow
        if (result > INT_MAX / 10 || (result === INT_MAX / 10 && digit > 7)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }
        
        result = result * 10 + digit;
        i++;
    }
    
    return result * sign;
};

console.log(myAtoi("42"));              // 42
console.log(myAtoi(" -042"));           // -42
console.log(myAtoi("1337c0d3"));        // 1337
console.log(myAtoi("0-1"));             // 0
console.log(myAtoi("-91283472332"));    // -2147483648
