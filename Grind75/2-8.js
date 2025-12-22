/**
 * LeetCode Grind 75 - 2-8
 * Diameter of Binary Tree (Easy - 30 mins)
 * 
 * Given the root of a binary tree, return the length of the diameter of the tree.
 * 
 * The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
 * This path may or may not pass through the root.
 * 
 * The length of a path between two nodes is represented by the number of edges between them.
 * 
 * Example 1:
 * Input: root = [1,2,3,4,5]
 * Output: 3
 * Explanation: 3 is the length of the path [4,2,1,3].
 * 
 * Example 2:
 * Input: root = [1,2]
 * Output: 1
 * 
 * Constraints:
 * - The number of nodes in the tree is in the range [1, 10^4].
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
var diameterOfBinaryTree = function(root) {
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
const tree1 = createTree([1, 2, 3, 4, 5]);
console.log("Expected: 3, Got:", diameterOfBinaryTree(tree1));

// 測試案例 2
console.log("\n=== Test Case 2 ===");
const tree2 = createTree([1, 2]);
console.log("Expected: 1, Got:", diameterOfBinaryTree(tree2));

// 測試案例 3
console.log("\n=== Test Case 3 ===");
const tree3 = createTree([1]);
console.log("Expected: 0, Got:", diameterOfBinaryTree(tree3));
