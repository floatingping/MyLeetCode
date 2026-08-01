/*
Medium | 30 mins
3-9. Accounts Merge
LeetCode 721: https://leetcode.com/problems/accounts-merge/
Difficulty: Medium
Suggested time: 30 mins

Each account is [name, email1, email2, ...]. Merge accounts that share at
least one email. Return each merged account with the name first and its emails
in sorted order. The accounts themselves may be returned in any order.

Example 1:
Input: accounts = [["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
Output: [["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]

Example 2:
Input: accounts = [["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe1@m.co"],["Kevin","Kevin3@m.co","Kevin5@m.co","Kevin0@m.co"],["Ethan","Ethan5@m.co","Ethan4@m.co","Ethan0@m.co"],["Hanzo","Hanzo3@m.co","Hanzo1@m.co","Hanzo0@m.co"],["Fern","Fern5@m.co","Fern1@m.co","Fern0@m.co"]]
Output: accounts with each name and its three sorted emails

Constraints:
- 1 <= accounts.length <= 1000
- 2 <= accounts[i].length <= 10
- 1 <= accounts[i][j].length <= 30
- accounts[i][0] is a name and accounts[i][j] for j > 0 is an email.
- Each email belongs to only one person.
*/

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {

};

console.log(accountsMerge([
	["John", "johnsmith@mail.com", "john_newyork@mail.com"],
	["John", "johnsmith@mail.com", "john00@mail.com"],
	["Mary", "mary@mail.com"],
	["John", "johnnybravo@mail.com"]
])); // [["John", "john00@mail.com", "john_newyork@mail.com", "johnsmith@mail.com"], ["Mary", "mary@mail.com"], ["John", "johnnybravo@mail.com"]]

// node Grind169/3-9.js
