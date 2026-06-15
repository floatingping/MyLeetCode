const { Node } = require("./lib.js");

var cloneGraph = function (node) {
    if (!node) return null;

    const visited = new Map();

    const dfs = (original) => {
        if (visited.has(original.val)) {
            return visited.get(original.val);
        }

        const clone = new Node(original.val);
        visited.set(original.val, clone);

        for (let neighbor of original.neighbors) {
            clone.neighbors.push(dfs(neighbor));
        }

        return clone;
    };

    return dfs(node);
};

// Test
const graph = Node.fromAdjacencyList([
    [2, 4],
    [1, 3],
    [2, 4],
    [1, 3]
]);
const cloned = cloneGraph(graph);
console.log(Node.toAdjacencyList(cloned));
// [[2,4],[1,3],[2,4],[1,3]]

// node Grind75/3-7_ans.js
