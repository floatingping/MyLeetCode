


/*
721. Accounts Merge
Solved
Medium
Topics
premium lock icon
Companies
Hint
Given a list of accounts where each element accounts[i] is a list of strings, where the first element accounts[i][0] is a name, and the rest of the elements are emails representing emails of the account.

Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some common email to both accounts. Note that even if two accounts have the same name, they may belong to different people as people could have the same name. A person can have any number of accounts initially, but all of their accounts definitely have the same name.

After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails in sorted order. The accounts themselves can be returned in any order.

 

Example 1:

Input: accounts = [["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
Output: [["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
Explanation:
The first and second John's are the same person as they have the common email "johnsmith@mail.com".
The third John and Mary are different people as none of their email addresses are used by other accounts.
We could return these lists in any order, for example the answer [['Mary', 'mary@mail.com'], ['John', 'johnnybravo@mail.com'], 
['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']] would still be accepted.
Example 2:

Input: accounts = [["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe1@m.co"],["Kevin","Kevin3@m.co","Kevin5@m.co","Kevin0@m.co"],["Ethan","Ethan5@m.co","Ethan4@m.co","Ethan0@m.co"],["Hanzo","Hanzo3@m.co","Hanzo1@m.co","Hanzo0@m.co"],["Fern","Fern5@m.co","Fern1@m.co","Fern0@m.co"]]
Output: [["Ethan","Ethan0@m.co","Ethan4@m.co","Ethan5@m.co"],["Gabe","Gabe0@m.co","Gabe1@m.co","Gabe3@m.co"],["Hanzo","Hanzo0@m.co","Hanzo1@m.co","Hanzo3@m.co"],["Kevin","Kevin0@m.co","Kevin3@m.co","Kevin5@m.co"],["Fern","Fern0@m.co","Fern1@m.co","Fern5@m.co"]]
 

Constraints:

1 <= accounts.length <= 1000
2 <= accounts[i].length <= 10
1 <= accounts[i][j].length <= 30
accounts[i][0] consists of English letters.
accounts[i][j] (for j > 0) is a valid email.
*/



var accountsMerge = function (accounts) {
    const parent = {};
    const emailToName = {};

    for (let account of accounts) {
        const name = account[0];
        const emails = account.slice(1);
        for (let email of emails) {
            if (!(email in parent)) {
                parent[email] = email;
            }
            emailToName[email] = name;
        }
        // Union 第一個 email 和其餘 email
        for (let i = 1; i < emails.length; i++) {
            union(emails[0], emails[i]);
        }
    }

    // 分組：用 parent 把 email 分類
    const groups = {};
    for (let email in parent) {
        const root = find(email);
        if (!groups[root]) groups[root] = [];
        groups[root].push(email);
    }

    // 整理結果
    const result = [];
    for (let emails of Object.values(groups)) {
        emails.sort();
        result.push([emailToName[emails[0]], ...emails]);
    }

    return result;



    // 初始化：每個 email 的 parent 是自己
    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }

    function union(x, y) {
        parent[find(x)] = find(y);
    }
};

accountsMerge([
    ["A", "a1", "a2", "a3"],
    ["A", "a2", "a4"],
    ["A", "a5", "a4"]
    // ["Mary", "mary@mail.com"],
    // ["John", "johnnybravo@mail.com"]
]);



// accountsMerge([
//     ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
//     ["John", "johnsmith@mail.com", "john00@mail.com"],
//     // ["Mary", "mary@mail.com"],
//     // ["John", "johnnybravo@mail.com"]
// ]);





[
    ["John", "johnsmith@mail.com", "john_newyork@mail.com", "john00@mail.com"],
    ["Mary", "mary@mail.com"],
    ["John", "johnnybravo@mail.com"]
]

[
    ["John", "john00@mail.com", "john_newyork@mail.com", "johnsmith@mail.com"],
    ["Mary", "mary@mail.com"],
    ["John", "johnnybravo@mail.com"]
]