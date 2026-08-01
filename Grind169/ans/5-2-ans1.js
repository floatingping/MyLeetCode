/*
Medium | 30 mins
LeetCode #261. Graph Valid Tree
https://leetcode.com/problems/graph-valid-tree/

Given n nodes labeled from 0 to n - 1 and an undirected edge list, return true if the edges form a valid tree.
*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function (n, edges) {
    // A valid tree must have n-1 edges
    if (edges.length !== n - 1) return false;
    
    // Build adjacency list
    const adj = new Map();
    for (let i = 0; i < n; i++) {
        adj.set(i, []);
    }
    
    for (const [u, v] of edges) {
        adj.get(u).push(v);
        adj.get(v).push(u);
    }
    
    // DFS to check if all nodes are connected (no cycles)
    const visited = new Set();
    
    const dfs = (node, parent) => {
        visited.add(node);
        
        for (const neighbor of adj.get(node)) {
            if (!visited.has(neighbor)) {
                if (!dfs(neighbor, node)) return false;
            } else if (neighbor !== parent) {
                // Found a cycle
                return false;
            }
        }
        
        return true;
    };
    
    if (!dfs(0, -1)) return false;
    
    // Check if all nodes are visited
    return visited.size === n;
};

console.log(validTree(5, [[0, 1], [0, 2], [0, 3], [1, 4]])); // true
console.log(validTree(5, [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]])); // false

// node Grind169/ans/5-2-ans1.js
