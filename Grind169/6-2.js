/*
Medium | 30 mins
735. Asteroid Collision
https://leetcode.com/problems/asteroid-collision/
Difficulty: Medium | Suggested time: 30 mins

Given an array asteroids representing asteroids in a row, return the state of
the asteroids after all collisions. The absolute value is size; the sign is
direction. Only asteroids moving toward each other can collide.

Example 1:
Input: asteroids = [5, 10, -5]
Output: [5, 10]

Example 2:
Input: asteroids = [8, -8]
Output: []

Example 3:
Input: asteroids = [10, 2, -5]
Output: [10]

Constraints:
- 2 <= asteroids.length <= 10^4
- -1000 <= asteroids[i] <= 1000
- asteroids[i] != 0
*/

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {

};

console.log(asteroidCollision([5, 10, -5])); // [5, 10]
console.log(asteroidCollision([8, -8])); // []
console.log(asteroidCollision([10, 2, -5])); // [10]

// node Grind169/6-2.js
