/*
Medium | 25 mins
133. Clone Graph
https://leetcode.com/problems/clone-graph/

Given a reference to a node in a connected undirected graph, return a deep copy of the graph.

Example 1:
Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]

Example 2:
Input: adjList = [[]]
Output: [[]]
*/

const Node = require('../libs/Node');

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    if (!node) return null;
    
    const map = new Map(); // Original node -> Cloned node
    
    const dfs = (n) => {
        if (map.has(n)) {
            return map.get(n);
        }
        
        const cloned = new Node(n.val);
        map.set(n, cloned);
        
        for (const neighbor of n.neighbors) {
            cloned.neighbors.push(dfs(neighbor));
        }
        
        return cloned;
    };
    
    return dfs(node);
};

let graph = Node.fromAdjacencyList([[2, 4], [1, 3], [2, 4], [1, 3]]);
console.log(Node.toAdjacencyList(cloneGraph(graph))); // [[2, 4], [1, 3], [2, 4], [1, 3]]

graph = Node.fromAdjacencyList([[]]);
console.log(Node.toAdjacencyList(cloneGraph(graph))); // [[]]

// node Grind169/ans/2-17-ans1.js
