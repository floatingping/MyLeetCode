


module.exports = class Node {
    constructor(val = 0, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }

    // Convert adjacency list to Node graph
    // Example: [[2,4],[1,3],[2,4],[1,3]] => Node graph
    static fromAdjacencyList(adjList) {
        if (!adjList || adjList.length === 0) return null;
        
        const nodes = {};
        // Create all nodes first
        for (let i = 0; i < adjList.length; i++) {
            nodes[i + 1] = new Node(i + 1);
        }
        
        // Connect neighbors
        for (let i = 0; i < adjList.length; i++) {
            for (let neighbor of adjList[i]) {
                nodes[i + 1].neighbors.push(nodes[neighbor]);
            }
        }
        
        return nodes[1];
    }

    // Convert Node graph to adjacency list
    // Example: Node graph => [[2,4],[1,3],[2,4],[1,3]]
    static toAdjacencyList(node) {
        if (!node) return [];
        
        const visited = new Set();
        const result = {};
        const queue = [node];
        
        while (queue.length > 0) {
            const current = queue.shift();
            if (visited.has(current.val)) continue;
            
            visited.add(current.val);
            result[current.val] = current.neighbors.map(n => n.val).sort((a, b) => a - b);
            
            for (let neighbor of current.neighbors) {
                if (!visited.has(neighbor.val)) {
                    queue.push(neighbor);
                }
            }
        }
        
        // Convert to array format
        const maxVal = Math.max(...Object.keys(result).map(Number));
        const arr = [];
        for (let i = 1; i <= maxVal; i++) {
            arr.push(result[i] || []);
        }
        return arr;
    }
};


