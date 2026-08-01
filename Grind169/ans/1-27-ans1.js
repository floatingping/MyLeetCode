/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    const processString = (str) => {
        const result = [];
        for (const char of str) {
            if (char === '#') {
                if (result.length > 0) {
                    result.pop();
                }
            } else {
                result.push(char);
            }
        }
        return result.join('');
    };
    
    return processString(s) === processString(t);
};

console.log(backspaceCompare("ab#c", "ad#c")); // true
console.log(backspaceCompare("ab##", "c#d#")); // true
console.log(backspaceCompare("a#c", "b")); // false

// node Grind169/ans/1-27-ans1.js
