var subsets = function (nums) {
    const result = [[]];
    
    for (const num of nums) {
        const newSubsets = [];
        for (const subset of result) {
            newSubsets.push([...subset, num]);
        }
        result.push(...newSubsets);
    }
    
    return result;
};

console.log(subsets([1,2,3]));    // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsets([0]));        // [[],[0]]
console.log(subsets([1,2]));      // [[],[1],[2],[1,2]]

// node Grind75/6-5_ans.js
