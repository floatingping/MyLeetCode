var accountsMerge = function (accounts) {
    const parent = new Map();
    const owner = new Map();

    // Union-Find utilities
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
        const px = find(x);
        const py = find(y);
        if (px !== py) {
            parent.set(px, py);
        }
    };

    // Build union-find structure
    for (const account of accounts) {
        const name = account[0];
        for (let i = 1; i < account.length; i++) {
            const email = account[i];
            if (!owner.has(email)) {
                owner.set(email, name);
            }
            union(account[1], email);
        }
    }

    // Group emails by their root parent
    const emailGroups = new Map();
    for (const email of owner.keys()) {
        const root = find(email);
        if (!emailGroups.has(root)) {
            emailGroups.set(root, []);
        }
        emailGroups.get(root).push(email);
    }

    // Build result
    const result = [];
    for (const [root, emails] of emailGroups) {
        const name = owner.get(root);
        const sortedEmails = emails.sort();
        result.push([name, ...sortedEmails]);
    }

    return result;
};

console.log(
    accountsMerge([
        ["John", "johnsmith@mail.com", "john00@mail.com"],
        ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
        ["John", "johnsmith00@mail.com"],
        ["Mary", "mary@mail.com"]
    ])
);
// [["John", "john00@mail.com", "john_newyork@mail.com", "johnsmith@mail.com"], ["John", "johnsmith00@mail.com"], ["Mary", "mary@mail.com"]]

// node Grind75/5-7_ans.js
