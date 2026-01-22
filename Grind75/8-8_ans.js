var jobScheduling = function (startTime, endTime, profit) {
    const jobs = [];
    for (let i = 0; i < startTime.length; i++) {
        jobs.push([startTime[i], endTime[i], profit[i]]);
    }
    
    // Sort by end time
    jobs.sort((a, b) => a[1] - b[1]);
    
    const n = jobs.length;
    const dp = new Array(n + 1).fill(0);
    
    for (let i = 1; i <= n; i++) {
        const [start, end, prof] = jobs[i - 1];
        
        // Find the latest job that doesn't conflict
        let j = i - 1;
        while (j > 0 && jobs[j - 1][1] > start) {
            j--;
        }
        
        // Either take this job or skip it
        dp[i] = Math.max(dp[i - 1], dp[j] + prof);
    }
    
    return dp[n];
};

console.log(jobScheduling([1,2,3,3], [3,4,5,6], [50,10,40,70]));           // 120
console.log(jobScheduling([1,2,3,4,6], [3,5,7,6,9], [20,20,100,70,60]));   // 150
console.log(jobScheduling([1,1,1], [2,3,4], [5,6,4]));                     // 6
