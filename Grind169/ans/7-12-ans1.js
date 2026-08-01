/*
Word Ladder - BFS
Time Complexity: O(n * l^2) where n is wordList length, l is word length
Space Complexity: O(n)
*/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    const queue = [[beginWord, 1]];
    const visited = new Set([beginWord]);

    while (queue.length > 0) {
        const [word, level] = queue.shift();

        if (word === endWord) {
            return level;
        }

        // Find neighbors (words that differ by 1 character)
        const neighbors = getNeighbors(word, wordSet);

        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([neighbor, level + 1]);
            }
        }
    }

    return 0;
};

function getNeighbors(word, wordSet) {
    const neighbors = [];
    const wordArray = word.split('');

    for (let i = 0; i < wordArray.length; i++) {
        const originalChar = wordArray[i];

        for (let c = 97; c < 123; c++) {  // a-z
            const char = String.fromCharCode(c);
            if (char === originalChar) continue;

            wordArray[i] = char;
            const newWord = wordArray.join('');
            if (wordSet.has(newWord)) {
                neighbors.push(newWord);
            }
        }

        wordArray[i] = originalChar;
    }

    return neighbors;
}

console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])); // 5
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"])); // 0

// node Grind169/ans/7-12-ans1.js
