/*
Medium | 25 mins
863. All Nodes Distance K in Binary Tree
https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/

Given the root of a binary tree, a target node, and an integer k,
return the values of all nodes exactly k edges away from target.

Strategy: Build parent map, then BFS/DFS
1. Build a map of parent pointers using DFS
2. From target, do BFS to find all nodes at distance k
3. Track visited nodes to avoid revisiting
*/

const TreeNode = require('../libs/TreeNode');

/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
    // Step 1: Build parent map
    const parentMap = new Map();
    buildParentMap(root, null, parentMap);
    
    // Step 2: BFS from target to find all nodes at distance k
    const result = [];
    const visited = new Set();
    const queue = [[target, 0]]; // [node, distance]
    visited.add(target);
    
    while (queue.length > 0) {
        const [node, dist] = queue.shift();
        
        if (!node) continue; // Skip null nodes
        
        if (dist === k) {
            result.push(node.val);
            continue;
        }
        
        // Explore children
        if (node.left && !visited.has(node.left)) {
            visited.add(node.left);
            queue.push([node.left, dist + 1]);
        }
        
        if (node.right && !visited.has(node.right)) {
            visited.add(node.right);
            queue.push([node.right, dist + 1]);
        }
        
        // Explore parent
        if (parentMap.has(node) && !visited.has(parentMap.get(node))) {
            const parent = parentMap.get(node);
            visited.add(parent);
            queue.push([parent, dist + 1]);
        }
    }
    
    return result;
};

function buildParentMap(node, parent, map) {
    if (!node) return;
    map.set(node, parent);
    buildParentMap(node.left, node, map);
    buildParentMap(node.right, node, map);
}

// Alternative DFS approach
var distanceKDFS = function (root, target, k) {
    const result = [];
    const parentMap = new Map();
    
    // Build parent map
    function buildMap(node, parent) {
        if (!node) return;
        parentMap.set(node, parent);
        buildMap(node.left, node);
        buildMap(node.right, node);
    }
    
    buildMap(root, null);
    
    const visited = new Set();
    
    // DFS from target
    function dfs(node, distance) {
        if (!node || visited.has(node)) return;
        visited.add(node);
        
        if (distance === k) {
            result.push(node.val);
            return;
        }
        
        if (distance < k) {
            // Explore children
            dfs(node.left, distance + 1);
            dfs(node.right, distance + 1);
            // Explore parent
            dfs(parentMap.get(node), distance + 1);
        }
    }
    
    dfs(target, 0);
    return result;
};

let tree = TreeNode.fromArray([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
let target = TreeNode.findNode(tree, 5);
console.log(distanceK(tree, target, 2)); // [7, 4, 1] in any order

tree = TreeNode.fromArray([1]);
target = TreeNode.findNode(tree, 1);
console.log(distanceK(tree, target, 3)); // []

// node Grind169/ans/6-20-ans1.js
