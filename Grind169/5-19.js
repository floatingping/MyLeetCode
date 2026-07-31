/*
LeetCode #323. Number of Connected Components in an Undirected Graph
https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/

You have n nodes labeled from 0 to n - 1 and an undirected edge list. Return the number of connected components in the graph.

Example 1:
Input: n = 5, edges = [[0,1],[1,2],[3,4]]
Output: 2

Example 2:
Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]
Output: 1

Constraints:
- 1 <= n <= 2000
- 1 <= edges.length <= 5000
- edges[i].length == 2
- 0 <= ai, bi < n
- ai != bi
- There are no repeated edges.
*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {

};

console.log(countComponents(5, [[0, 1], [1, 2], [3, 4]])); // 2
console.log(countComponents(5, [[0, 1], [1, 2], [2, 3], [3, 4]])); // 1

// node Grind169/5-19.js
