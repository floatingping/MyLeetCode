/*
Hard | 35 mins
759. Employee Free Time
合并所有工作区间，找出空闲时间
*/

function Interval(start, end) {
	this.start = start;
	this.end = end;
}

var employeeFreeTime = function (schedule) {
	// 处理两种输入格式：Interval对象或数组
	const intervals = [];
	for (const employeeSchedule of schedule) {
		for (const interval of employeeSchedule) {
			if (Array.isArray(interval)) {
				intervals.push([interval[0], interval[1]]);
			} else {
				intervals.push([interval.start, interval.end]);
			}
		}
	}

	// 按开始时间排序
	intervals.sort((a, b) => a[0] - b[0]);

	// 合并重叠区间
	const merged = [];
	for (const [start, end] of intervals) {
		if (merged.length === 0 || merged[merged.length - 1][1] < start) {
			merged.push([start, end]);
		} else {
			merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], end);
		}
	}

	// 找出空闲时间
	const result = [];
	for (let i = 0; i < merged.length - 1; i++) {
		result.push(new Interval(merged[i][1], merged[i + 1][0]));
	}

	return result;
};

const result = employeeFreeTime([[[1, 2], [5, 6]], [[1, 3]], [[4, 10]]]);
console.log(result.map(r => [r.start, r.end])); // [[3, 4]]

// node Grind169/ans/8-6-ans1.js
