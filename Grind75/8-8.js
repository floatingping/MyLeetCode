/*
8-8. Maximum Profit in Job Scheduling
https://leetcode.com/problems/maximum-profit-in-job-scheduling/

We have n jobs, where every job is scheduled at some time and has a profit associated with it.

You're given three arrays: startTime, endTime, and profit where:

- startTime[i] is the start time of the ith job
- endTime[i] is the end time of the ith job
- profit[i] is the profit of the ith job

You're also given an integer profit where startTime[i] <= endTime[i].

You have to select and complete on or before endTime[i] jobs so to maximize profit.

A job that starts at endTime[i] can be started after a job that ends at endTime[i].

Return the maximum profit you can take such that there are no two jobs in the subset with overlapping time range.

Example 1:

Input: startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]
Output: 120
Explanation: The subset chosen is the first and fourth job.
Time range [1,3]+[3,6] , we get profit of 120 = 50 + 70.

Example 2:

Input: startTime = [1,2,3,4,6], endTime = [3,5,7,6,9], profit = [20,20,100,70,60]
Output: 150
Explanation: The subset chosen is the first, third and fourth job.
Profit obtained 150 = 20 + 100 + 70.

Constraints:

1 <= n <= 5 * 104
1 <= startTime[i] <= endTime[i] <= 109
1 <= profit[i] <= 104
*/

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {

};

console.log(jobScheduling([1,2,3,3], [3,4,5,6], [50,10,40,70]));           // 120
console.log(jobScheduling([1,2,3,4,6], [3,5,7,6,9], [20,20,100,70,60]));   // 150
console.log(jobScheduling([1,1,1], [2,3,4], [5,6,4]));                     // 6

// node Grind75/8-8.js
