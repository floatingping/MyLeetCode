var wordBreak = function (s, wordDict) {
    const wordSet = new Set(wordDict);
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length];
};

console.log(wordBreak("leetcode", ["leet", "code"])); // true
console.log(wordBreak("applepenapple", ["apple", "pen"])); // true
console.log(
    wordBreak("catsandsandcatsandcatsanddog", [
        "cat",
        "cats",
        "and",
        "sand",
        "dog"
    ])
); // true
console.log(wordBreak("ab", ["a"])); // false

// node Grind75/6-1_ans.js
