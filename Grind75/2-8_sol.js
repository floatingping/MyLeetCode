/**
 * LeetCode Grind 75 - 2-8 Solution
 * Diameter of Binary Tree (Easy - 30 mins)
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
    let diameter = 0;
    
    // DFS 函數：返回從該節點到最深葉子的最大深度
    function dfs(node) {
        if (!node) return 0;
        
        const leftHeight = dfs(node.left);
        const rightHeight = dfs(node.right);
        
        // 更新經過此節點的最長路徑
        diameter = Math.max(diameter, leftHeight + rightHeight);
        
        // 返回此節點的高度
        return Math.max(leftHeight, rightHeight) + 1;
    }
    
    dfs(root);
    return diameter;
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
