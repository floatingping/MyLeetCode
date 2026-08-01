/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const romanMap = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);
    
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        const current = romanMap.get(s[i]);
        const next = romanMap.get(s[i + 1]);
        
        // If current value is less than next value, subtract (like IV = 4)
        if (next && current < next) {
            result -= current;
        } else {
            result += current;
        }
    }
    
    return result;
};

console.log(romanToInt("III")); // 3
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994

// node Grind169/ans/1-26-ans1.js
