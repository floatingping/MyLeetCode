/*
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

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {

};

const firstGraph = { val: 1, neighbors: [] };
const secondGraph = { val: 2, neighbors: [] };
firstGraph.neighbors = [secondGraph];
secondGraph.neighbors = [firstGraph];
console.log(cloneGraph(firstGraph)); // a deep copy of the graph
console.log(cloneGraph({ val: 1, neighbors: [] })); // a deep copy of the single node

// node Grind169/2-17.js
