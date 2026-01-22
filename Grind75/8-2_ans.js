var minWindow = function (s, t) {
    if (t.length > s.length) return "";
    
    const tCount = new Map();
    for (const char of t) {
        tCount.set(char, (tCount.get(char) || 0) + 1);
    }
    
    let left = 0, right = 0;
    let formed = 0;
    const windowCount = new Map();
    let minLen = Infinity;
    let minStart = 0;
    
    while (right < s.length) {
        const char = s[right];
        windowCount.set(char, (windowCount.get(char) || 0) + 1);
        
        if (tCount.has(char) && windowCount.get(char) === tCount.get(char)) {
            formed++;
        }
        
        while (formed === tCount.size && left <= right) {
            const windowLength = right - left + 1;
            if (windowLength < minLen) {
                minLen = windowLength;
                minStart = left;
            }
            
            const leftChar = s[left];
            windowCount.set(leftChar, windowCount.get(leftChar) - 1);
            if (tCount.has(leftChar) && windowCount.get(leftChar) < tCount.get(leftChar)) {
                formed--;
            }
            left++;
        }
        
        right++;
    }
    
    return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
};

console.log(minWindow("ADOBECODEBANC", "ABC"));    // "ADOBEC"
console.log(minWindow("a", "a"));                   // "a"
console.log(minWindow("a", "aa"));                  // ""
