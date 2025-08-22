/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let i = 0;

    while (s[i] === " ") i++;

    let sign = 1;
    if (s[i] === "-") {
        i++;
        sign = -1;
    } else if (s[i] === "+") {
        i++;
        sign = 1;
    }

    const max = 2 ** 31 - 1;
    const min = -(2 ** 31);

    let n = 0;
    while (i < s.length && s[i] >= "0" && s[i] <= "9") {
        n = n * 10 + (s[i] - "0");

        if (sign === 1 && n >= max) return max;
        if (sign === -1 && -n < min) return min;

        i++;
    }

    return sign * n;
};

myAtoi("42"); // 42
myAtoi("   -42"); // -42
myAtoi("4193 with words"); // 4193
myAtoi("words and 987"); // 0
myAtoi("-91283472332"); // -2147483648
myAtoi("2147483648"); // 2147483647
myAtoi("   +0 123"); // 0
myAtoi("+-2"); // 0


