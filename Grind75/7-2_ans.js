var letterCombinations = function (digits) {
    if (digits.length === 0) return [];

    const map = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    };

    const result = [""];

    for (const digit of digits) {
        const letters = map[digit];
        const newCombinations = [];

        for (const combo of result) {
            for (const letter of letters) {
                newCombinations.push(combo + letter);
            }
        }

        result.length = 0;
        result.push(...newCombinations);
    }

    return result;
};

console.log(letterCombinations("23")); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations("")); // []
console.log(letterCombinations("2")); // ["a","b","c"]
console.log(letterCombinations("234")); // ["adg","adh","adi","aeg","aeh","aei","afg","afh","afi","bdg","bdh","bdi","beg","beh","bei","bfg","bfh","bfi","cdg","cdh","cdi","ceg","ceh","cei","cfg","cfh","cfi"]

// node Grind75/7-2_ans.js
