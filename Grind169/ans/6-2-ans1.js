/*
Medium | 30 mins
735. Asteroid Collision
https://leetcode.com/problems/asteroid-collision/

Given an array asteroids, return the state after all collisions.

Strategy: Use Stack
- Process asteroids from left to right
- For right-moving asteroid, push to stack
- For left-moving asteroid, simulate collisions with stack top
- Larger asteroid survives, smaller explodes, equal explode both
*/

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    const stack = [];
    
    for (let asteroid of asteroids) {
        let alive = true;
        
        while (alive && asteroid < 0 && stack.length > 0 && stack[stack.length - 1] > 0) {
            const top = stack[stack.length - 1];
            const sum = top + asteroid; // Both negative at this point since asteroid < 0
            
            if (sum < 0) {
                // Current asteroid is larger, top explodes
                stack.pop();
            } else if (sum > 0) {
                // Top is larger, current asteroid explodes
                alive = false;
            } else {
                // Both explode
                stack.pop();
                alive = false;
            }
        }
        
        if (alive) {
            stack.push(asteroid);
        }
    }
    
    return stack;
};

console.log(asteroidCollision([5, 10, -5])); // [5, 10]
console.log(asteroidCollision([8, -8])); // []
console.log(asteroidCollision([10, 2, -5])); // [10]

// node Grind169/ans/6-2-ans1.js
