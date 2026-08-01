/*
Medium | 45 mins
787. Cheapest Flights Within K Stops
https://leetcode.com/problems/cheapest-flights-within-k-stops/

There are n cities and flights. Return the cheapest price from src to dst
using at most k stops, or -1 if no route exists.

Strategy: Bellman-Ford algorithm (modified for k stops)
- Use distance array to track minimum cost to each city
- Relax edges k+1 times (k stops means at most k+1 edges)
- At each iteration, check if we can improve distances
- Stop early if no improvements found
*/

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
    // Distance array: minimum cost to reach each city
    let dist = Array(n).fill(Infinity);
    dist[src] = 0;
    
    // Bellman-Ford: relax edges k+1 times (k stops = k+1 edges)
    for (let i = 0; i < k + 1; i++) {
        const temp = dist.slice(); // Copy current distances
        
        // Relax all edges
        for (let [from, to, price] of flights) {
            if (dist[from] !== Infinity && dist[from] + price < temp[to]) {
                temp[to] = dist[from] + price;
            }
        }
        
        dist = temp;
    }
    
    return dist[dst] === Infinity ? -1 : dist[dst];
};

// Alternative: SPFA (Shortest Path Faster Algorithm)
var findCheapestPriceSPFA = function (n, flights, src, dst, k) {
    const graph = Array.from({ length: n }, () => []);
    
    // Build adjacency list
    for (let [from, to, price] of flights) {
        graph[from].push([to, price]);
    }
    
    // dist[i] = [minPrice, stopsUsed]
    const dist = Array.from({ length: n }, () => [Infinity, Infinity]);
    dist[src] = [0, 0];
    
    const queue = [[src, 0, 0]]; // [city, currentPrice, stopsUsed]
    
    while (queue.length > 0) {
        const [city, price, stops] = queue.shift();
        
        // If we already found a better path, skip
        if (price > dist[city][0]) {
            continue;
        }
        
        // If we exceeded k stops, skip
        if (stops > k) {
            continue;
        }
        
        // Explore neighbors
        for (let [nextCity, nextPrice] of graph[city]) {
            const newPrice = price + nextPrice;
            const newStops = stops + 1;
            
            // If we found a cheaper way, update and add to queue
            if (newPrice < dist[nextCity][0]) {
                dist[nextCity][0] = newPrice;
                dist[nextCity][1] = newStops;
                queue.push([nextCity, newPrice, newStops]);
            }
        }
    }
    
    return dist[dst][0] === Infinity ? -1 : dist[dst][0];
};

console.log(findCheapestPrice(4, [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]], 0, 3, 1)); // 700
console.log(findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 1)); // 200

// node Grind169/ans/6-19-ans1.js
