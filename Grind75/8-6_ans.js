var ladderLength = function (beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;
    
    const queue = [[beginWord, 1]];
    const visited = new Set([beginWord]);
    
    const getNeighbors = (word) => {
        const neighbors = [];
        for (let i = 0; i < word.length; i++) {
            for (let j = 0; j < 26; j++) {
                const char = String.fromCharCode(97 + j);
                if (char !== word[i]) {
                    const newWord = word.substring(0, i) + char + word.substring(i + 1);
                    if (wordSet.has(newWord) && !visited.has(newWord)) {
                        neighbors.push(newWord);
                    }
                }
            }
        }
        return neighbors;
    };
    
    while (queue.length > 0) {
        const [word, length] = queue.shift();
        
        if (word === endWord) {
            return length;
        }
        
        for (const neighbor of getNeighbors(word)) {
            visited.add(neighbor);
            queue.push([neighbor, length + 1]);
        }
    }
    
    return 0;
};

console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]));    // 5
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"]));           // 0
console.log(ladderLength("a", "b", ["b"]));                                         // 2

// node Grind75/8-6_ans.js
