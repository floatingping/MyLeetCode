var MedianFinder = function () {
    this.nums = [];
};

MedianFinder.prototype.addNum = function (num) {
    let left = 0, right = this.nums.length;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (this.nums[mid] < num) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    this.nums.splice(left, 0, num);
};

MedianFinder.prototype.findMedian = function () {
    const n = this.nums.length;
    if (n % 2 === 1) {
        return this.nums[Math.floor(n / 2)];
    } else {
        return (this.nums[n / 2 - 1] + this.nums[n / 2]) / 2;
    }
};

// Test cases
let mf = new MedianFinder();
mf.addNum(1);
console.log(mf.findMedian());    // 1.0
mf.addNum(2);
console.log(mf.findMedian());    // 1.5
mf.addNum(3);
console.log(mf.findMedian());    // 2.0

// node Grind75/8-5_ans.js
