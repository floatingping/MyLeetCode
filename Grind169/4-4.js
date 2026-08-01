/*
Medium | 30 mins
4-4. Minimum Height Trees
310. Minimum Height Trees
https://leetcode.com/problems/minimum-height-trees/

A tree is an undirected graph in which any two vertices are connected by exactly one path. Given a tree of n nodes labeled from 0 to n - 1 and an array of edges, return a list of all roots that produce minimum-height trees. You may return the answer in any order.

The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.

Example 1:

Input: n = 4, edges = [[1,0],[1,2],[1,3]]
Output: [1]
Explanation: When rooted at node 1, the tree has height 1, which is the minimum possible height.
Example 2:

Input: n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
Output: [3,4]

Constraints:

1 <= n <= 2 * 10^4
edges.length == n - 1
edges[i].length == 2
0 <= ai, bi < n
ai != bi
All the pairs (ai, bi) are distinct.
The given input is guaranteed to be a tree and there will be no repeated edges.
*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {



};

console.log(findMinHeightTrees(4, [[1, 0], [1, 2], [1, 3]])); // [1]
console.log(findMinHeightTrees(6, [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]])); // [3, 4]
console.log(findMinHeightTrees(1, [])); // [0]


// node Grind169/4-4.js
