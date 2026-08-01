/*
Medium | 30 mins
4-10. Gas Station
134. Gas Station
https://leetcode.com/problems/gas-station/
*/

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
	let totalGas = 0;
	let totalCost = 0;
	let currentGas = 0;
	let startStation = 0;
	
	for (let i = 0; i < gas.length; i++) {
		totalGas += gas[i];
		totalCost += cost[i];
		currentGas += gas[i] - cost[i];
		
		// If we can't reach the next station, start from next station
		if (currentGas < 0) {
			startStation = i + 1;
			currentGas = 0;
		}
	}
	
	// If total gas is less than total cost, impossible to complete circuit
	if (totalGas < totalCost) {
		return -1;
	}
	
	return startStation;
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])); // 3
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3])); // -1
console.log(canCompleteCircuit([5], [4])); // 0

// node Grind169/ans/4-10-ans1.js
