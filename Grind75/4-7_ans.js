var numIslands = function (grid) {
    if (!grid || grid.length === 0) return 0;
    
    let count = 0;
    
    const dfs = (i, j) => {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0') {
            return;
        }
        
        grid[i][j] = '0';
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    };
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count++;
                dfs(i, j);
            }
        }
    }
    
    return count;
};

console.log(numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]));  // 1

console.log(numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]));  // 3

console.log(numIslands([["1"]]));  // 1
console.log(numIslands([["0"]]));  // 0
