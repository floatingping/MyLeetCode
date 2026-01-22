var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }

    return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4])); // 5
console.log(maxProfit([7,6,4,3,2,1])); // 0
console.log(maxProfit([2,4,1])); // 2

// node Grind75/1-4_ans.js
