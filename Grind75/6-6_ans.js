const { TreeNode } = require('./lib.js');

var rightSideView = function (root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            
            // Add the rightmost node of each level
            if (i === levelSize - 1) {
                result.push(node.val);
            }
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    
    return result;
};

console.log(rightSideView(TreeNode.fromArray([1,2,3,null,5,null,4])));    // [1,3,4]
console.log(rightSideView(TreeNode.fromArray([1,null,3])));               // [1,3]
console.log(rightSideView(TreeNode.fromArray([])));                       // []

// node Grind75/6-6_ans.js
