var combinationSum = function (candidates, target) {
    const result = [];

    const backtrack = (start, path, remaining) => {
        if (remaining === 0) {
            result.push([...path]);
            return;
        }

        if (remaining < 0) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i]);
            backtrack(i, path, remaining - candidates[i]);
            path.pop();
        }
    };

    backtrack(0, [], target);
    return result;
};

console.log(combinationSum([2, 3, 6, 7], 7)); // [[2,2,3],[7]]
console.log(combinationSum([2, 3, 5], 8)); // [[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationSum([2], 1)); // []
console.log(combinationSum([3, 6, 9], 9)); // [[3,3,3],[3,6],[9]]

// node Grind75/5-2_ans.js
