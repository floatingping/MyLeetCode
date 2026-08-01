/*
Medium | 35 mins
LeetCode #1197. Minimum Knight Moves
https://leetcode.com/problems/minimum-knight-moves/

An infinite chessboard has a knight at [0, 0]. Return the minimum number of moves required
for the knight to reach [x, y]. A knight moves two squares in one direction and one square perpendicular.
*/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function (x, y) {
    // Take absolute values - the problem is symmetric
    x = Math.abs(x);
    y = Math.abs(y);
    
    // Ensure x >= y for optimization
    if (x < y) {
        [x, y] = [y, x];
    }
    
    // Knight moves: 8 possible directions
    const moves = [[2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1]];
    
    // BFS
    const queue = [[0, 0, 0]]; // [x, y, steps]
    const visited = new Set(['0,0']);
    
    while (queue.length > 0) {
        const [curX, curY, steps] = queue.shift();
        
        if (curX === x && curY === y) {
            return steps;
        }
        
        for (const [dx, dy] of moves) {
            const nextX = curX + dx;
            const nextY = curY + dy;
            const key = `${nextX},${nextY}`;
            
            if (!visited.has(key)) {
                visited.add(key);
                queue.push([nextX, nextY, steps + 1]);
            }
        }
    }
    
    return -1;
};

console.log(minKnightMoves(2, 1)); // 1
console.log(minKnightMoves(5, 5)); // 4

// node Grind169/ans/5-20-ans1.js
