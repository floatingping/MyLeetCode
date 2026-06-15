var orangesRotting = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    const queue = [];
    let freshCount = 0;
    
    // Find all rotten oranges and count fresh ones
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j, 0]); // [row, col, time]
            } else if (grid[i][j] === 1) {
                freshCount++;
            }
        }
    }
    
    // If no fresh oranges, return 0
    if (freshCount === 0) return 0;
    
    // BFS
    let maxTime = 0;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    
    while (queue.length > 0) {
        const [row, col, time] = queue.shift();
        maxTime = Math.max(maxTime, time);
        
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;
            
            if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && grid[newRow][newCol] === 1) {
                grid[newRow][newCol] = 2;
                freshCount--;
                queue.push([newRow, newCol, time + 1]);
            }
        }
    }
    
    return freshCount === 0 ? maxTime : -1;
};

console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]));  // 4
console.log(orangesRotting([[2,1,1],[0,1,1],[1,0,1]]));  // -1
console.log(orangesRotting([[0,2]]));                     // 0
console.log(orangesRotting([[2,1,1,1]]));                 // 3

// node Grind75/4-8_ans.js
