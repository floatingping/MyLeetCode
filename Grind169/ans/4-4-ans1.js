/*
Medium | 30 mins
4-4. Minimum Height Trees
310. Minimum Height Trees
https://leetcode.com/problems/minimum-height-trees/
*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
	if (n === 1) return [0];
	
	// Build adjacency list
	const adj = new Map();
	const degree = new Map();
	
	for (let i = 0; i < n; i++) {
		adj.set(i, []);
		degree.set(i, 0);
	}
	
	for (const [u, v] of edges) {
		adj.get(u).push(v);
		adj.get(v).push(u);
		degree.set(u, degree.get(u) + 1);
		degree.set(v, degree.get(v) + 1);
	}
	
	// Start with leaf nodes (degree 1)
	const queue = [];
	for (let i = 0; i < n; i++) {
		if (degree.get(i) === 1) {
			queue.push(i);
		}
	}
	
	let remainingNodes = n;
	
	while (remainingNodes > 2) {
		const leafCount = queue.length;
		remainingNodes -= leafCount;
		
		for (let i = 0; i < leafCount; i++) {
			const leaf = queue.shift();
			for (const neighbor of adj.get(leaf)) {
				degree.set(neighbor, degree.get(neighbor) - 1);
				if (degree.get(neighbor) === 1) {
					queue.push(neighbor);
				}
			}
		}
	}
	
	// Remaining nodes in queue are centers
	const result = [];
	for (const node of queue) {
		result.push(node);
	}
	
	return result;
};

console.log(findMinHeightTrees(4, [[1, 0], [1, 2], [1, 3]])); // [1]
console.log(findMinHeightTrees(6, [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]])); // [3, 4]
console.log(findMinHeightTrees(1, [])); // [0]

// node Grind169/ans/4-4-ans1.js
