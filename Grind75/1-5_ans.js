var isPalindrome = function (s) {
    const filtered = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let left = 0;
    let right = filtered.length - 1;

    while (left < right) {
        if (filtered[left] !== filtered[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true
console.log(isPalindrome("0P")); // false

// node Grind75/1-5_ans.js
