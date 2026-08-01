/*
Hard | 35 mins
239. Sliding Window Maximum
使用单调队列维持窗口内的最大值
*/

var maxSlidingWindow = function (nums, k) {
	const deque = []; // 存储索引
	const result = [];

	for (let i = 0; i < nums.length; i++) {
		// 移除超出窗口的索引
		while (deque.length > 0 && deque[0] < i - k + 1) {
			deque.shift();
		}

		// 移除小于当前元素的索引（维持递减顺序）
		while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
			deque.pop();
		}

		// 添加当前索引
		deque.push(i);

		// 当窗口满时，记录最大值
		if (i >= k - 1) {
			result.push(nums[deque[0]]);
		}
	}

	return result;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3, 3, 5, 5, 6, 7]
console.log(maxSlidingWindow([1], 1)); // [1]

// node Grind169/ans/8-10-ans1.js
