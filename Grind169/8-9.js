/*
Hard | 45 mins
815. Bus Routes
https://leetcode.com/problems/bus-routes/

Each route repeats forever in a loop. Return the fewest buses needed to travel
from source to target, or -1 if no route can reach the target.

Examples:
routes = [[1,2,7],[3,6,7]], source = 1, target = 6 -> 2
routes = [[7,12],[4,5,15],[6],[15,19],[9,12,13]], source = 15, target = 12 -> -1

Constraints:
- 1 <= routes.length <= 500
- 1 <= routes[i].length <= 10^5
- 0 <= routes[i][j], source, target < 10^6
*/

/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function (routes, source, target) {

};

console.log(numBusesToDestination([[1, 2, 7], [3, 6, 7]], 1, 6)); // 2
console.log(numBusesToDestination([[7, 12], [4, 5, 15], [6], [15, 19], [9, 12, 13]], 15, 12)); // -1

// node Grind169/8-9.js
