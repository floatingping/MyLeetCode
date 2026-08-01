/*
Hard | 40 mins
632. Smallest Range Covering Elements from K Lists
使用优先队列（最小堆）和滑动窗口
*/

var smallestRange = function (nums) {
	const pq = []; // 最小堆 [value, listIndex, elementIndex]

	let maxVal = -Infinity;

	// 初始化：每个列表取第一个元素
	for (let i = 0; i < nums.length; i++) {
		pq.push([nums[i][0], i, 0]);
		maxVal = Math.max(maxVal, nums[i][0]);
	}

	// 按最小值排序
	pq.sort((a, b) => a[0] - b[0]);

	let range = [0, Infinity];

	while (pq.length === nums.length) {
		const [minVal, listIdx, elemIdx] = pq.shift();

		// 更新范围
		if (maxVal - minVal < range[1] - range[0]) {
			range = [minVal, maxVal];
		}

		// 尝试获取下一个元素
		if (elemIdx + 1 < nums[listIdx].length) {
			const nextVal = nums[listIdx][elemIdx + 1];
			pq.push([nextVal, listIdx, elemIdx + 1]);
			maxVal = Math.max(maxVal, nextVal);
			pq.sort((a, b) => a[0] - b[0]);
		}
	}

	return range;
};

console.log(smallestRange([[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]])); // [20, 24]
console.log(smallestRange([[1, 2, 3], [1, 2, 3], [1, 2, 3]])); // [1, 1]

// node Grind169/ans/8-16-ans1.js
