/*
Easy | 20 mins
108. Convert Sorted Array to Binary Search Tree
https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

Given a sorted integer array nums, convert it to a height-balanced binary search tree.

Example 1:
Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]

Example 2:
Input: nums = [1,3]
Output: [3,1]
*/

const TreeNode = require('../libs/TreeNode');

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    const buildBST = (left, right) => {
        if (left > right) return null;
        
        const mid = Math.floor((left + right) / 2);
        const node = new TreeNode(nums[mid]);
        node.left = buildBST(left, mid - 1);
        node.right = buildBST(mid + 1, right);
        
        return node;
    };
    
    return buildBST(0, nums.length - 1);
};

console.log(TreeNode.toArray(sortedArrayToBST([-10, -3, 0, 5, 9]))); // [0, -3, 9, -10, null, 5]
console.log(TreeNode.toArray(sortedArrayToBST([1, 3]))); // [1, null, 3]

// node Grind169/ans/2-6-ans1.js
