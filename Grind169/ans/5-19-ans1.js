/*
Medium | 30 mins
LeetCode #323. Number of Connected Components in an Undirected Graph
https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/

You have n nodes labeled from 0 to n - 1 and an undirected edge list.
Return the number of connected components in the graph.
*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
    // Union Find approach
    const parent = new Array(n);
    for (let i = 0; i < n; i++) {
        parent[i] = i;
    }
    
    const find = (x) => {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    };
    
    const union = (x, y) => {
        const rootX = find(x);
        const rootY = find(y);
        if (rootX !== rootY) {
            parent[rootX] = rootY;
        }
    };
    
    for (const [u, v] of edges) {
        union(u, v);
    }
    
    // Count unique roots
    const roots = new Set();
    for (let i = 0; i < n; i++) {
        roots.add(find(i));
    }
    
    return roots.size;
};

console.log(countComponents(5, [[0, 1], [1, 2], [3, 4]])); // 2
console.log(countComponents(5, [[0, 1], [1, 2], [2, 3], [3, 4]])); // 1

// node Grind169/ans/5-19-ans1.js
