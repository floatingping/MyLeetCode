/**
 * LeetCode Grind 75 - 2-10 Solution
 * Maximum Depth of Binary Tree (Easy - 15 mins)
 */

/**
 * Definition for a binary tree node.
 */
function TreeNode(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    // Recursive DFS 方法
    if (!root) return 0;
    
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    
    return Math.max(leftDepth, rightDepth) + 1;
};

// Helper function: 從陣列建立 Binary Tree (level-order)
function createTree(arr) {
    if (!arr || arr.length === 0 || arr[0] === null) return null;
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;
    while (queue.length > 0 && i < arr.length) {
        const node = queue.shift();
        if (arr[i] !== null) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;
        if (i < arr.length && arr[i] !== null) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }
    return root;
}

// 測試案例 1
console.log("=== Test Case 1 ===");
const tree1 = createTree([3, 9, 20, null, null, 15, 7]);
console.log("Expected: 3, Got:", maxDepth(tree1));

// 測試案例 2
console.log("\n=== Test Case 2 ===");
const tree2 = createTree([1, null, 2]);
console.log("Expected: 2, Got:", maxDepth(tree2));

// 測試案例 3
console.log("\n=== Test Case 3 ===");
const tree3 = createTree([]);
console.log("Expected: 0, Got:", maxDepth(tree3));
