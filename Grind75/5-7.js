/*
5-7. Accounts Merge
https://leetcode.com/problems/accounts-merge/

Given a list of accounts where each element accounts[i] is a list of strings, where the first element accounts[i][0] is a name, and the rest of the elements are emails representing emails of the account.

Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some email that is common to both accounts. Note that even if two accounts have the same name, they may belong to different people as people can have the same name. A person can have any number of accounts and each account can have any number of emails, but all of the different emails of a person should belong to that person.

After merging accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails in sorted order. The accounts themselves can be returned in any order.

Example 1:

Input: accounts = [["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["John", "johnsmith00@mail.com"], ["Mary", "mary@mail.com"]]
Output: [["John", "john00@mail.com", "john_newyork@mail.com", "johnsmith@mail.com"], ["John", "johnsmith00@mail.com"], ["Mary", "mary@mail.com"]]

Constraints:

1 <= accounts.length <= 1000
2 <= accounts[i].length <= 10
1 <= accounts[i][j].length <= 30
accounts[i][0] consists of uppercase and lowercase letters.
accounts[i][j] (for j > 0) is a valid email.
*/

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {};

console.log(
    accountsMerge([
        ["John", "johnsmith@mail.com", "john00@mail.com"],
        ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
        ["John", "johnsmith00@mail.com"],
        ["Mary", "mary@mail.com"]
    ])
);
// [["John", "john00@mail.com", "john_newyork@mail.com", "johnsmith@mail.com"], ["John", "johnsmith00@mail.com"], ["Mary", "mary@mail.com"]]

// node Grind75/5-7.js
