var canFinish = function(numCourses, prerequisites) {
    const graph = Array(numCourses).fill(null).map(() => []);
    const inDegree = Array(numCourses).fill(0);

    for (let [a, b] of prerequisites) {
        graph[b].push(a);
        inDegree[a]++;
    }

    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    let count = 0;
    while (queue.length > 0) {
        const course = queue.shift();
        count++;

        for (let nextCourse of graph[course]) {
            inDegree[nextCourse]--;
            if (inDegree[nextCourse] === 0) {
                queue.push(nextCourse);
            }
        }
    }

    return count === numCourses;
};

console.log(canFinish(2, [[1,0]])); // true
console.log(canFinish(2, [[1,0],[0,1]])); // false
console.log(canFinish(3, [[0,1],[0,2],[1,2]])); // true

// node Grind75/4-1_ans.js
