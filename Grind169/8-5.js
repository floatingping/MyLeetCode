/*
588. Design In-Memory File System
https://leetcode.com/problems/design-in-memory-file-system/

Design an in-memory file system supporting directory listing, directory
creation, appending content to files, and reading file content.

Example:
fileSystem.ls("/") -> ["a"] after fileSystem.mkdir("/a/b/c")
fileSystem.readContentFromFile("/a/b/c/d") -> "hello" after adding "hello"

Constraints:
- 1 <= path.length, filePath.length <= 100
- Paths start with '/' and use lowercase letters.
- At most 300 calls are made to the methods.
*/

class FileSystem {
	constructor() {

	}

	/** @param {string} path @return {string[]} */
	ls(path) {

	}

	/** @param {string} path @return {void} */
	mkdir(path) {

	}

	/** @param {string} filePath @param {string} content @return {void} */
	addContentToFile(filePath, content) {

	}

	/** @param {string} filePath @return {string} */
	readContentFromFile(filePath) {

	}
}

const fileSystem = new FileSystem();
fileSystem.mkdir("/a/b/c");
fileSystem.addContentToFile("/a/b/c/d", "hello");
console.log(fileSystem.ls("/")); // ["a"]
console.log(fileSystem.readContentFromFile("/a/b/c/d")); // "hello"

// node Grind169/8-5.js
