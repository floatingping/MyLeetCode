/*
Medium | 30 mins
3-9. Accounts Merge
LeetCode 721: https://leetcode.com/problems/accounts-merge/
Difficulty: Medium
Suggested time: 30 mins

Each account is [name, email1, email2, ...]. Merge accounts that share at
least one email. Return each merged account with the name first and its emails
in sorted order. The accounts themselves may be returned in any order.
*/

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
	// Union-Find data structure
	const parent = new Map();
	
	const find = (x) => {
		if (!parent.has(x)) {
			parent.set(x, x);
		}
		if (parent.get(x) !== x) {
			parent.set(x, find(parent.get(x)));
		}
		return parent.get(x);
	};
	
	const union = (x, y) => {
		const rootX = find(x);
		const rootY = find(y);
		if (rootX !== rootY) {
			parent.set(rootX, rootY);
		}
	};
	
	// Build union-find
	for (const account of accounts) {
		for (let i = 1; i < account.length; i++) {
			union(account[1], account[i]);
		}
	}
	
	// Group emails by root parent
	const emailToName = new Map();
	const emailToRoot = new Map();
	
	for (const account of accounts) {
		const name = account[0];
		for (let i = 1; i < account.length; i++) {
			const email = account[i];
			emailToName.set(email, name);
			const root = find(email);
			emailToRoot.set(email, root);
		}
	}
	
	// Group emails by their root
	const rootToEmails = new Map();
	for (const [email, root] of emailToRoot) {
		if (!rootToEmails.has(root)) {
			rootToEmails.set(root, []);
		}
		rootToEmails.get(root).push(email);
	}
	
	// Build result
	const result = [];
	for (const [root, emails] of rootToEmails) {
		const name = emailToName.get(root);
		const sortedEmails = emails.sort();
		result.push([name, ...sortedEmails]);
	}
	
	return result;
};

console.log(accountsMerge([
	["John", "johnsmith@mail.com", "john_newyork@mail.com"],
	["John", "johnsmith@mail.com", "john00@mail.com"],
	["Mary", "mary@mail.com"],
	["John", "johnnybravo@mail.com"]
])); // [["John", "john00@mail.com", "john_newyork@mail.com", "johnsmith@mail.com"], ["Mary", "mary@mail.com"], ["John", "johnnybravo@mail.com"]]

// node Grind169/ans/3-9-ans1.js
