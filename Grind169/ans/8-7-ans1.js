/*
Hard | 40 mins
212. Word Search II
使用Trie数据结构和DFS回溯
*/

class TrieNode {
	constructor() {
		this.children = new Map();
		this.word = null;
	}
}

var findWords = function (board, words) {
	// 构建Trie
	const root = new TrieNode();
	for (const word of words) {
		let node = root;
		for (const char of word) {
			if (!node.children.has(char)) {
				node.children.set(char, new TrieNode());
			}
			node = node.children.get(char);
		}
		node.word = word;
	}

	const result = [];

	const dfs = (i, j, node) => {
		if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
			return;
		}

		const char = board[i][j];

		// 已访问或不在Trie中
		if (char === '#' || !node.children.has(char)) {
			return;
		}

		const nextNode = node.children.get(char);

		// 找到单词
		if (nextNode.word) {
			result.push(nextNode.word);
			nextNode.word = null; // 避免重复
		}

		// 标记为已访问
		const original = board[i][j];
		board[i][j] = '#';

		// 递归搜索四个方向
		dfs(i - 1, j, nextNode);
		dfs(i + 1, j, nextNode);
		dfs(i, j - 1, nextNode);
		dfs(i, j + 1, nextNode);

		// 恢复
		board[i][j] = original;
	};

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			dfs(i, j, root);
		}
	}

	return result;
};

const board = [["o", "a", "a", "n"], ["e", "t", "a", "e"], ["i", "h", "k", "r"], ["i", "f", "l", "v"]];
console.log(findWords(board, ["oath", "pea", "eat", "rain"])); // ["oath", "eat"]

// node Grind169/ans/8-7-ans1.js
