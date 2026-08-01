/*
Medium | 30 mins
362. Design Hit Counter
https://leetcode.com/problems/design-hit-counter/

Design a hit counter that records hits and returns the number of hits
received in the past 5 minutes (300 seconds).

Strategy: Array with circular queue or direct storage
- Store all hit timestamps
- For getHits at timestamp T, count all hits in range [T-299, T]
- Can optimize with circular array or queue
*/

/**
 * Initialize the hit counter.
 */
var HitCounter = function () {
    this.hits = [];
};

/**
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function (timestamp) {
    this.hits.push(timestamp);
};

/**
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function (timestamp) {
    const fiveMinutesAgo = timestamp - 299; // 5 minutes = 300 seconds, so [timestamp-299, timestamp]
    
    let count = 0;
    for (let hitTime of this.hits) {
        if (hitTime >= fiveMinutesAgo && hitTime <= timestamp) {
            count++;
        }
    }
    
    return count;
};

// Alternative efficient implementation using circular array
var HitCounterOptimal = function () {
    this.times = new Array(300).fill(0);
    this.hits = new Array(300).fill(0);
};

HitCounterOptimal.prototype.hit = function (timestamp) {
    const index = timestamp % 300;
    if (this.times[index] !== timestamp) {
        this.times[index] = timestamp;
        this.hits[index] = 1;
    } else {
        this.hits[index]++;
    }
};

HitCounterOptimal.prototype.getHits = function (timestamp) {
    let count = 0;
    for (let i = 0; i < 300; i++) {
        if (this.times[i] > timestamp - 300) {
            count += this.hits[i];
        }
    }
    return count;
};

const counter = new HitCounter();
counter.hit(1);
counter.hit(2);
counter.hit(3);
console.log(counter.getHits(4)); // 3
console.log(counter.getHits(300)); // 3
console.log(counter.getHits(301)); // 2

// node Grind169/ans/6-8-ans1.js
