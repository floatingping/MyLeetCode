var climbStairs = function (n) {
    if (n <= 1) return n;

    let prev1 = 1;
    let prev2 = 2;

    for (let i = 3; i <= n; i++) {
        let current = prev1 + prev2;
        prev1 = prev2;
        prev2 = current;
    }

    return prev2;
};

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(4)); // 5
console.log(climbStairs(5)); // 8

// node Grind75/2-3_ans.js
