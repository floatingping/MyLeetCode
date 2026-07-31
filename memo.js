console.log("appleBanana".substring(0)); //appleBanana
console.log("appleBanana".substring(0, 5)); //apple 不包含5
console.log("appleBanana".substring(5)); //Banana
console.log("appleBanana".substring(5, 11)); //Banana 到11-1=10
console.log("appleBanana".substring(5, 12)); //Banana 到12-1=11也可以，但容易讓人誤會
console.log("appleBanana".substring(5, 10)); //Banan 到10-1=9

// Set使用
const set = new Set();
set.add("apple");
set.add("banana");
console.log(set.has("apple"));
set.delete("banana");
set.add("orange");
set.delete("apple");
console.log(set);

// Map使用
const map = new Map();
map.set("name", "John");
map.set("age", 30);
console.log(map.get("name"));
map.set("age", 31);
map.delete("name");
console.log(map);

const INT_MAX = 2 ** 31 - 1;
const INT_MIN = -(2 ** 31);

// 正則使用

//01背包
function zeroOneKnapsack(weights, values, capacity) {
	const dp = new Array(capacity + 1).fill(0);

	for (let index = 0; index < weights.length; index++) {
		const weight = weights[index];
		const value = values[index];

		for (let currentCapacity = capacity; currentCapacity >= weight; currentCapacity--) {
			dp[currentCapacity] = Math.max(
				dp[currentCapacity],
				dp[currentCapacity - weight] + value
			);
		}
	}

	return dp[capacity];
}

console.log(
	"01背包:",
	zeroOneKnapsack([1, 3, 4], [15, 20, 30], 4)
); // 35

//完全背包
function completeKnapsack(weights, values, capacity) {
	const dp = new Array(capacity + 1).fill(0);

	for (let index = 0; index < weights.length; index++) {
		const weight = weights[index];
		const value = values[index];

		for (let currentCapacity = weight; currentCapacity <= capacity; currentCapacity++) {
			dp[currentCapacity] = Math.max(
				dp[currentCapacity],
				dp[currentCapacity - weight] + value
			);
		}
	}

	return dp[capacity];
}

console.log(
	"完全背包:",
	completeKnapsack([1, 3, 4], [15, 20, 30], 4)
); // 60

//有限背包
function boundedKnapsack(weights, values, counts, capacity) {
	const dp = new Array(capacity + 1).fill(0);

	for (let index = 0; index < weights.length; index++) {
		const weight = weights[index];
		const value = values[index];
		const count = counts[index];

		for (let currentCapacity = capacity; currentCapacity >= 0; currentCapacity--) {
			for (
				let usedCount = 1;
				usedCount <= count && currentCapacity >= usedCount * weight;
				usedCount++
			) {
				dp[currentCapacity] = Math.max(
					dp[currentCapacity],
					dp[currentCapacity - usedCount * weight] + usedCount * value
				);
			}
		}
	}

	return dp[capacity];
}

console.log(
	"有限背包:",
	boundedKnapsack([1, 3, 4], [15, 20, 30], [3, 1, 1], 4)
); // 45

//多重背包
function multipleKnapsack(weights, values, counts, capacity) {
	const expandedWeights = [];
	const expandedValues = [];

	for (let index = 0; index < weights.length; index++) {
		let remainingCount = counts[index];
		let groupSize = 1;

		while (remainingCount > 0) {
			const takeCount = Math.min(groupSize, remainingCount);
			expandedWeights.push(weights[index] * takeCount);
			expandedValues.push(values[index] * takeCount);
			remainingCount -= takeCount;
			groupSize *= 2;
		}
	}

	return zeroOneKnapsack(expandedWeights, expandedValues, capacity);
}

console.log(
	"多重背包:",
	multipleKnapsack([1, 3, 4], [15, 20, 30], [3, 1, 1], 4)
); // 45

//分组背包
function groupedKnapsack(groups, capacity) {
	const dp = new Array(capacity + 1).fill(0);

	for (const group of groups) {
		const previous = [...dp];

		for (let currentCapacity = 0; currentCapacity <= capacity; currentCapacity++) {
			for (const item of group) {
				if (currentCapacity >= item.weight) {
					dp[currentCapacity] = Math.max(
						dp[currentCapacity],
						previous[currentCapacity - item.weight] + item.value
					);
				}
			}
		}
	}

	return dp[capacity];
}

console.log(
	"分组背包:",
	groupedKnapsack(
		[
			[
				{ weight: 1, value: 15 },
				{ weight: 2, value: 20 },
			],
			[
				{ weight: 3, value: 30 },
				{ weight: 4, value: 40 },
			],
		],
		4
	)
); // 45

[1, 2, 3, 4, 5].slice(1); // [2, 3, 4, 5]
[1, 2, 3, 4, 5].slice(1, 3); // [2, 3] //不包含3

[3, 1, 2].sort((a, b) => a - b); // [1, 2, 3]  //a-b升序、會修改原陣列
["March", "Jan", "Feb", "Dec"].sort(); // ["Dec", "Feb", "Jan", "March"] //字母順序排序
[1, 30, 4, 21, 100000].sort(); // [1, 100000, 21, 30, 4] //數字排序會轉成字串比較

Object.keys({ a: 3, b: 4, c: 5 }); // ["a", "b", "c"]
Object.values({ a: 3, b: 4, c: 5 }); // [3, 4, 5]

2 ** 31 - 1; // 2147483647
-(2 ** 31); // -2147483648

Array.from({ length: 2 }, () => new Array(3).fill(1)); // [[1, 1, 1], [1, 1, 1]] 2x3陣列

"ab".charCodeAt(0); // 97 取得字元的Unicode編碼
"ab".charCodeAt(1); // 98 取得字元的Unicode編碼
