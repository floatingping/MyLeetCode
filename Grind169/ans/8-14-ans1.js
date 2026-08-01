/*
Hard | 35 mins
41. First Missing Positive
O(n)时间O(1)空间：使用数组本身作为哈希表
*/

var firstMissingPositive = function (nums) {
	const n = nums.length;

	// 将数字放在正确位置（数字k应该在索引k-1处）
	for (let i = 0; i < n; i++) {
		while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
			// 交换
			const correctIdx = nums[i] - 1;
			[nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]];
		}
	}

	// 找第一个不在正确位置的正整数
	for (let i = 0; i < n; i++) {
		if (nums[i] !== i + 1) {
			return i + 1;
		}
	}

	// 如果所有位置都正确，缺失的是n+1
	return n + 1;
};

console.log(firstMissingPositive([1, 2, 0])); // 3
console.log(firstMissingPositive([3, 4, -1, 1])); // 2
console.log(firstMissingPositive([7, 8, 9, 11, 12])); // 1

// node Grind169/ans/8-14-ans1.js
