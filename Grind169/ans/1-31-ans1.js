/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs || strs.length === 0) return "";
    
    let prefix = "";
    
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];
        
        // Check if this character matches in all strings
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== char) {
                return prefix;
            }
        }
        
        prefix += char;
    }
    
    return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"])); // "inters"

// node Grind169/ans/1-31-ans1.js
