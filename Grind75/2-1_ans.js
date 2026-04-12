const isBadVersion = function(n) {
    return function(version) {
        return version >= n;
    };
};

var solution = function(isBadVersion) {
    return function(n) {
        let left = 1;
        let right = n;

        while (left < right) {
            let mid = Math.floor(left + (right - left) / 2);
            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    };
};


console.log(solution(isBadVersion(4))(5)); // 4

// node Grind75/2-1_ans.js
