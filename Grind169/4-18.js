/*
4-18. Shortest Path to Get Food
1730. Shortest Path to Get Food
https://leetcode.com/problems/shortest-path-to-get-food/

You are starving and want to eat food as quickly as possible. You are given an m x n character matrix grid, where each cell is one of the following:
- '*' is your location. There is exactly one '*'.
- '#' is a food cell. There may be multiple food cells.
- 'O' is free space that you can travel through.
- 'X' is an obstacle that you cannot travel through.

You can move to an adjacent cell north, east, south, or west. Return the length of the shortest path for you to reach any food cell. If you cannot reach food, return -1.

Example 1:

Input: grid = [["X","X","X","X","X","X"],["X","*","O","O","O","X"],["X","O","O","#","O","X"],["X","X","X","X","X","X"]]
Output: 3
Explanation: It takes 3 steps to reach the food.
Example 2:

Input: grid = [["X","X","X","X","X"],["X","*","X","O","X"],["X","O","X","#","X"],["X","X","X","X","X"]]
Output: -1
Example 3:

Input: grid = [["X","X","X","X","X","X","X","X"],["X","*","O","X","O","#","O","X"],["X","O","O","X","O","O","X","X"],["X","O","O","O","O","#","O","X"],["X","X","X","X","X","X","X","X"]]
Output: 6

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 200
grid[i][j] is '*', 'X', 'O', or '#'.
There is exactly one '*' in grid.
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var getFood = function (grid) {



};

console.log(getFood([["X", "X", "X", "X", "X", "X"], ["X", "*", "O", "O", "O", "X"], ["X", "O", "O", "#", "O", "X"], ["X", "X", "X", "X", "X", "X"]])); // 3
console.log(getFood([["X", "X", "X", "X", "X"], ["X", "*", "X", "O", "X"], ["X", "O", "X", "#", "X"], ["X", "X", "X", "X", "X"]])); // -1
console.log(getFood([["X", "X", "X", "X"], ["X", "*", "O", "#"], ["X", "X", "X", "X"]])); // 2


// node Grind169/4-18.js
