var findMinHeightTrees = function (n, edges) {
    if (n === 1) return [0];
    
    const graph = Array(n).fill(null).map(() => []);
    const degree = new Array(n).fill(0);
    
    for (const [a, b] of edges) {
        graph[a].push(b);
        graph[b].push(a);
        degree[a]++;
        degree[b]++;
    }
    
    const queue = [];
    for (let i = 0; i < n; i++) {
        if (degree[i] === 1) {
            queue.push(i);
        }
    }
    
    let remaining = n;
    while (remaining > 2) {
        const size = queue.length;
        remaining -= size;
        
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            for (const neighbor of graph[node]) {
                degree[neighbor]--;
                if (degree[neighbor] === 1) {
                    queue.push(neighbor);
                }
            }
        }
    }
    
    const result = [];
    while (queue.length > 0) {
        result.push(queue.shift());
    }
    
    return result.length > 0 ? result : [0];
};

console.log(findMinHeightTrees(4, [[1,0],[1,2],[1,3]]));      // [1]
console.log(findMinHeightTrees(6, [[3,0],[3,1],[3,2],[3,4],[3,5]]));  // [3]
console.log(findMinHeightTrees(1, []));                        // [0]
console.log(findMinHeightTrees(2, [[0,1]]));                   // [0,1]
