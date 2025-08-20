


/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
function wordBreak(s, wordDict) {
    const wordSet = new Set(wordDict);
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i < dp.length; i++) { // i表示index + 1
        for (let j = 0; j < i; j++) { // 記得j<i，因為再過去就超出字串
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                break; //已經判斷成功就不需要再判斷
            }
        }
    }

    return dp[s.length];
}




wordBreak("leetcode", ["leet", "code"]);
wordBreak("applepenapple", ["apple", "pen"]);
wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]);


