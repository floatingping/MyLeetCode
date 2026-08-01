/*
Hard | 45 mins
815. Bus Routes
使用BFS找最少公交数量
*/

var numBusesToDestination = function (routes, source, target) {
	if (source === target) {
		return 0;
	}

	// 构建站点到公交线路的映射
	const stationToBuses = new Map();
	for (let i = 0; i < routes.length; i++) {
		for (const station of routes[i]) {
			if (!stationToBuses.has(station)) {
				stationToBuses.set(station, []);
			}
			stationToBuses.get(station).push(i);
		}
	}

	// 检查source是否存在
	if (!stationToBuses.has(source)) {
		return -1;
	}

	// BFS
	const visitedStations = new Set([source]);
	const visitedBuses = new Set();
	const queue = [[source, 0]]; // [station, busCount]

	while (queue.length > 0) {
		const [station, busCount] = queue.shift();

		// 获取经过该站点的所有公交线路
		for (const busIdx of stationToBuses.get(station)) {
			if (visitedBuses.has(busIdx)) {
				continue;
			}

			// 检查该公交线路是否经过目标站点
			if (routes[busIdx].includes(target)) {
				return busCount + 1;
			}

			visitedBuses.add(busIdx);

			// 将这条线路上的所有站点添加到队列
			for (const nextStation of routes[busIdx]) {
				if (!visitedStations.has(nextStation)) {
					visitedStations.add(nextStation);
					queue.push([nextStation, busCount + 1]);
				}
			}
		}
	}

	return -1;
};

console.log(numBusesToDestination([[1, 2, 7], [3, 6, 7]], 1, 6)); // 2
console.log(numBusesToDestination([[7, 12], [4, 5, 15], [6], [15, 19], [9, 12, 13]], 15, 12)); // -1

// node Grind169/ans/8-9-ans1.js
