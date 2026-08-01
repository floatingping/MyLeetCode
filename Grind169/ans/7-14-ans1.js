/*
Maximum Profit in Job Scheduling - Dynamic Programming + Binary Search
Time Complexity: O(n log n)
Space Complexity: O(n)
*/

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
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
        let latestNonConflict = 0;
        let left = 0, right = i - 2;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (jobs[mid][1] <= start) {
                latestNonConflict = mid + 1;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        // Max of taking this job or not taking it
        dp[i] = Math.max(dp[i - 1], dp[latestNonConflict] + prof);
    }

    return dp[n];
};

console.log(jobScheduling([1, 2, 3, 3], [3, 4, 5, 6], [50, 10, 40, 70])); // 120
console.log(jobScheduling([1, 2, 3, 4, 6], [3, 5, 10, 6, 9], [20, 20, 100, 70, 60])); // 150

// node Grind169/ans/7-14-ans1.js
