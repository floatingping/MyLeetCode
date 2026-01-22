var leastInterval = function (tasks, n) {
    const count = new Array(26).fill(0);
    
    for (const task of tasks) {
        count[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }
    
    const maxCount = Math.max(...count);
    let maxCountNum = 0;
    
    for (const c of count) {
        if (c === maxCount) {
            maxCountNum++;
        }
    }
    
    const result = Math.max(
        (maxCount - 1) * (n + 1) + maxCountNum,
        tasks.length
    );
    
    return result;
};

console.log(leastInterval(["A","A","A","B","B","B"], 2));              // 8
console.log(leastInterval(["A","A","A","B","B","B"], 3));              // 10
console.log(leastInterval(["A","A","A","B","B","B","C","C","C"], 2));  // 9
