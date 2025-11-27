

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

    jobs.sort((a, b) => a[1] - b[1]);

    const dp = new Array(jobs.length + 1).fill(0);

    for (let i = 0; i < jobs.length; i++) {
        const j = findLastAvailableJob(jobs[i][0]);



        profitTakeThis = j === -1 ? jobs[i][2] : dp[j + 1] + jobs[i][2];
        profitUntakeThis = dp[i - 1 + 1]
        dp[i + 1] = Math.max(profitTakeThis, profitUntakeThis);
    }

    return dp[jobs.length];

    function findLastAvailableJob(s, maxId) {
        let l = 0;
        let r = maxId;
        let result = -1;

        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (jobs[mid][1] > s) {
                r = mid - 1;
            } else {
                l = mid + 1;
                result = mid;
            }
        }

        return result;
    }
};




jobScheduling([1, 2, 3, 3], [3, 4, 5, 6], [50, 10, 40, 70]);
jobScheduling([1, 2, 3, 4, 6], [3, 5, 10, 6, 9], [20, 20, 100, 70, 60]);
jobScheduling([1, 1, 1], [2, 3, 4], [5, 6, 4]);


