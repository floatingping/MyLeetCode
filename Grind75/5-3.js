/*
https://leetcode.com/problems/permutations/description/
46. Permutations

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
 

Constraints:

1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const result = [];
    const visited = new Array(nums.length).fill(false);

    backtrack([]);

    return result;

    function backtrack(path) {
        console.log(path);
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (visited[i]) continue;

            path.push(nums[i]);
            visited[i] = true;
            backtrack(path);
            path.pop();
            visited[i] = false;
        }
    }
};


console.log(permute([1, 2, 3])); // Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permute([0, 1])); // Output: [[0,1  ],[1,0]]
console.log(permute([1])); // Output: [[1]]


/*
Time Complexity: O(n * n!), where n is the length of the input array. The n! accounts for the number of permutations, and each permutation takes O(n) time to construct.
Space Complexity: O(n), where n is the length of the input array. This accounts for the recursion stack and the temporary path array used to store the current permutation.
*/



