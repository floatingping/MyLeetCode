/*
https://leetcode.com/problems/letter-combinations-of-a-phone-number/submissions/1768415168/
17. Letter Combinations of a Phone Number

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


 

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].
*/


/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (!digits.length) return [];

    const phoneMap = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };

    const result = [];

    backtrack("", 0);
    return result;


    function backtrack(path, index) {
        if (index === digits.length) {
            result.push(path);
            return;
        }

        const letters = phoneMap[digits[index]];
        for (let letter of letters) {
            backtrack(path + letter, index + 1);
        }
    };
};



console.log(letterCombinations("23")); //["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations("")); //[]
console.log(letterCombinations("2")); //["a","b","c"]


