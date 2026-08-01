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

Constraints:
- The number of nodes is in the range [0, 100].
- 1 <= Node.val <= 100
- Node.val is unique for each node.
*/

const Node = require('./libs/Node');

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {

};

let graph = Node.fromAdjacencyList([[2, 4], [1, 3], [2, 4], [1, 3]]);
console.log(Node.toAdjacencyList(cloneGraph(graph))); // [[2, 4], [1, 3], [2, 4], [1, 3]]

graph = Node.fromAdjacencyList([[]]);
console.log(Node.toAdjacencyList(cloneGraph(graph))); // [[]]

// node Grind169/2-17.js
