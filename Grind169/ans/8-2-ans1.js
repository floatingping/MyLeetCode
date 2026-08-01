/*
Hard | 40 mins
4. Median of Two Sorted Arrays
使用二分查找，O(log(m+n))时间复杂度
*/

var findMedianSortedArrays = function (nums1, nums2) {
	// 确保nums1是较短的数组
	if (nums1.length > nums2.length) {
		return findMedianSortedArrays(nums2, nums1);
	}

	const m = nums1.length;
	const n = nums2.length;
	let left = 0,
		right = m;

	while (left <= right) {
		const cut1 = Math.floor((left + right) / 2);
		const cut2 = Math.floor((m + n + 1) / 2) - cut1;

		const left1 = cut1 === 0 ? -Infinity : nums1[cut1 - 1];
		const right1 = cut1 === m ? Infinity : nums1[cut1];

		const left2 = cut2 === 0 ? -Infinity : nums2[cut2 - 1];
		const right2 = cut2 === n ? Infinity : nums2[cut2];

		if (left1 <= right2 && left2 <= right1) {
			// 找到正确的分割点
			const maxLeft = Math.max(left1, left2);
			const minRight = Math.min(right1, right2);

			// 如果总长度是奇数
			if ((m + n) % 2 === 1) {
				return maxLeft;
			}
			// 如果总长度是偶数
			return (maxLeft + minRight) / 2;
		} else if (left1 > right2) {
			right = cut1 - 1;
		} else {
			left = cut1 + 1;
		}
	}

	return -1;
};

console.log(findMedianSortedArrays([1, 3], [2])); // 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5

// node Grind169/ans/8-2-ans1.js
