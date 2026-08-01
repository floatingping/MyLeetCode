/*
Hard | 40 mins
588. Design In-Memory File System
使用嵌套的Map结构表示目录树
*/

class FileSystem {
	constructor() {
		// 使用Map结构实现文件树
		this.root = new Map();
	}

	ls(path) {
		const parts = path.split('/').filter(p => p);
		let current = this.root;

		// 导航到指定路径
		for (const part of parts) {
			if (!current.has(part)) {
				return [];
			}
			current = current.get(part).children;
		}

		// 获取该目录下的所有项目，排序返回
		const result = [];
		for (const [name, node] of current) {
			result.push(name);
		}
		return result.sort();
	}

	mkdir(path) {
		const parts = path.split('/').filter(p => p);
		let current = this.root;

		for (const part of parts) {
			if (!current.has(part)) {
				current.set(part, {
					children: new Map(),
					content: ''
				});
			}
			current = current.get(part).children;
		}
	}

	addContentToFile(filePath, content) {
		const parts = filePath.split('/').filter(p => p);
		let current = this.root;

		// 创建所有必要的目录
		for (let i = 0; i < parts.length - 1; i++) {
			if (!current.has(parts[i])) {
				current.set(parts[i], {
					children: new Map(),
					content: ''
				});
			}
			current = current.get(parts[i]).children;
		}

		// 处理文件
		const fileName = parts[parts.length - 1];
		if (!current.has(fileName)) {
			current.set(fileName, {
				children: new Map(),
				content: ''
			});
		}

		// 追加内容
		const fileNode = current.get(fileName);
		fileNode.content += content;
	}

	readContentFromFile(filePath) {
		const parts = filePath.split('/').filter(p => p);
		let current = this.root;

		for (const part of parts) {
			if (!current.has(part)) {
				return '';
			}
			current = current.get(part).children;
		}

		// 最后一个part是文件名，需要回退一个
		const fileName = parts[parts.length - 1];
		const lastDir = this.root;
		let temp = lastDir;

		for (let i = 0; i < parts.length - 1; i++) {
			temp = temp.get(parts[i]).children;
		}

		if (temp.has(fileName)) {
			return temp.get(fileName).content;
		}

		return '';
	}
}

const fileSystem = new FileSystem();
fileSystem.mkdir("/a/b/c");
fileSystem.addContentToFile("/a/b/c/d", "hello");
console.log(fileSystem.ls("/")); // ["a"]
console.log(fileSystem.readContentFromFile("/a/b/c/d")); // "hello"

// node Grind169/ans/8-5-ans1.js
