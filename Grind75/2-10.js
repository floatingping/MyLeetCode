/**
 * LeetCode Grind 75 - 2-10
 * Maximum Depth of Binary Tree (Easy - 15 mins)
 * 
 * Given the root of a binary tree, return its maximum depth.
 * 
 * A binary tree's maximum depth is the number of nodes along the longest path 
 * from the root node down to the farthest leaf node.
 * 
 * Example 1:
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 3
 * 
 * Example 2:
 * Input: root = [1,null,2]
 * Output: 2
 * 
 * Example 3:
 * Input: root = []
 * Output: 0
 * 
 * Constraints:
 * - The number of nodes in the tree is in the range [0, 10^4].
 * - -100 <= Node.val <= 100
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
    // TODO: 補充你的程式碼
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
