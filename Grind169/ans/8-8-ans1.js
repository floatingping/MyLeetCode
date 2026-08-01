/*
Hard | 45 mins
269. Alien Dictionary
使用拓扑排序（Kahn算法）
*/

var alienOrder = function (words) {
	// 构建图
	const graph = new Map();
	const inDegree = new Map();

	// 初始化所有字符
	for (const word of words) {
		for (const char of word) {
			if (!graph.has(char)) {
				graph.set(char, []);
				inDegree.set(char, 0);
			}
		}
	}

	// 构建边
	for (let i = 0; i < words.length - 1; i++) {
		const word1 = words[i];
		const word2 = words[i + 1];

		// 找第一个不同的字符
		const minLen = Math.min(word1.length, word2.length);
		for (let j = 0; j < minLen; j++) {
			if (word1[j] !== word2[j]) {
				const from = word1[j];
				const to = word2[j];

				// 避免重复边
				if (!graph.get(from).includes(to)) {
					graph.get(from).push(to);
					inDegree.set(to, inDegree.get(to) + 1);
				}
				break;
			}
		}

		// 检查是否有效（如果word1是word2的前缀但更长）
		if (word1.length > word2.length && word1.startsWith(word2)) {
			return "";
		}
	}

	// 拓扑排序（BFS）
	const queue = [];
	for (const [char, degree] of inDegree) {
		if (degree === 0) {
			queue.push(char);
		}
	}

	const result = [];
	while (queue.length > 0) {
		const char = queue.shift();
		result.push(char);

		for (const next of graph.get(char)) {
			inDegree.set(next, inDegree.get(next) - 1);
			if (inDegree.get(next) === 0) {
				queue.push(next);
			}
		}
	}

	// 检查是否存在环（返回的字符数不等于总字符数）
	if (result.length !== graph.size) {
		return "";
	}

	return result.join("");
};

console.log(alienOrder(["wrt", "wrf", "er", "ett", "rftt"])); // "wertf"
console.log(alienOrder(["z", "x", "z"])); // ""

// node Grind169/ans/8-8-ans1.js
