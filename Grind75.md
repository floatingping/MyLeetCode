




# 1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]


```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numIdxMap = {};
    for(let i = 0; i<nums.length; i++){
        if(numIdxMap[target - nums[i]] >= 0){
            return [numIdxMap[target - nums[i]], i];
        }
        numIdxMap[nums[i]] = i;
    }

    return null;
};
```


# 20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

 
```
Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true
```



```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];

  const map = {
    ")":"(",
    "}":"{",
    "]":"["
  }

  for(let i = 0; i<s.length; i++){
    const c = s[i];
    switch(c){
        case "(":
        case "{":
        case "[": stack.push(c); break;
        default:
            if(stack[stack.length-1] != map[c]) return false;
            stack.pop();
    }
  }  
  return stack.length === 0;
};


/*

注意 for(let c in "abc") 的 c是idx

*/

```




# *21. Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:

Input: list1 = [], list2 = []
Output: []

Example 3:

Input: list1 = [], list2 = [0]
Output: [0]

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1);
    let current = dummy;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // 接上剩餘的節點
    current.next = list1 || list2;

    return dummy.next;
};
```

# 121. Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

 

Constraints:

    1 <= prices.length <= 105
    0 <= prices[i] <= 104


```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else {
            maxProfit = Math.max(maxProfit, price - minPrice);
        }
    }

    return maxProfit;
};
```




# 125. *Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

 

Constraints:

    1 <= s.length <= 2 * 105
    s consists only of printable ASCII characters.

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const handledStr = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

    let l = 0;
    let r = handledStr.length - 1;

    while(l<r){
        if(handledStr[l]!=handledStr[r]) return false;

        l++;
        r--;
    }

    return true;
};
```
## `s.replace(/[^A-Za-z0-9]/g, "")`正則
## `toLowerCase()`
## `Alphanumeric`表示字母數字都需要



# 226. Invert Binary Tree
Given the root of a binary tree, invert the tree, and return its root.

 

Example 1:

Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Example 2:

Input: root = [2,1,3]
Output: [2,3,1]

Example 3:

Input: root = []
Output: []

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
    if(!root) return root;

    invertTree(root.left);
    invertTree(root.right);

    const l = root.left;
    root.left = root.right;
    root.right = l;

    return root;
};
```

# 242. Valid Anagram
Given two strings s and t, return true if t is an

of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 

Constraints:

    1 <= s.length, t.length <= 5 * 104
    s and t consist of lowercase English letters.

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const bucket = [...s].reduce((a,c)=>{
        if(!a[c]) a[c] = 0;
        a[c]++;
        return a;
    },{});

    for(let i = 0; i < t.length; i++){
        if(!bucket[t[i]]) return false;
        bucket[t[i]]--;
    }

    return Object.keys(bucket).every(k=>bucket[k]===0);
};
```

## 注意字串要展開才能reduce`[...s]`


# *704. Binary Search

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

 

Constraints:

    1 <= nums.length <= 104
    -104 < nums[i], target < 104
    All the integers in nums are unique.
    nums is sorted in ascending order.

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

  let l = 0;
  let r = nums.length-1;

  while(l<=r){

    const mid = Math.floor((l+r)/2);

    if(nums[mid] === target) return mid;

    if(nums[mid]< target){
        l = mid+1;
    }else{
        r = mid-1;
    }
  }
    return -1;
};
```




# *733. Flood Fill

You are given an image represented by an m x n grid of integers image, where image[i][j] represents the pixel value of the image. You are also given three integers sr, sc, and color. Your task is to perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill:

    Begin with the starting pixel and change its color to color.
    Perform the same process for each pixel that is directly adjacent (pixels that share a side with the original pixel, either horizontally or vertically) and shares the same color as the starting pixel.
    Keep repeating this process by checking neighboring pixels of the updated pixels and modifying their color if it matches the original color of the starting pixel.
    The process stops when there are no more adjacent pixels of the original color to update.

Return the modified image after performing the flood fill.

 

Example 1:

Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2

Output: [[2,2,2],[2,2,0],[2,0,1]]

Explanation:

From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.

Note the bottom corner is not colored 2, because it is not horizontally or vertically connected to the starting pixel.

Example 2:

Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0

Output: [[0,0,0],[0,0,0]]

Explanation:

The starting pixel is already colored with 0, which is the same as the target color. Therefore, no changes are made to the image.

 

Constraints:

    m == image.length
    n == image[i].length
    1 <= m, n <= 50
    0 <= image[i][j], color < 216
    0 <= sr < m
    0 <= sc < n


```js
var floodFill = function(image, sr, sc, newColor) {
    const originalColor = image[sr][sc];
    if (originalColor === newColor) return image; // 避免無限遞迴

    const rows = image.length;
    const cols = image[0].length;

    function dfs(r, c) {
        if (r < 0 || c < 0 || r >= rows || c >= cols) return; // 越界
        if (image[r][c] !== originalColor) return; // 顏色不同則跳出

        image[r][c] = newColor; // 換顏色

        dfs(r + 1, c); // 下
        dfs(r - 1, c); // 上
        dfs(r, c + 1); // 右
        dfs(r, c - 1); // 左
    }

    dfs(sr, sc);
    return image;
};
```



# *235. Lowest Common Ancestor of a Binary Search Tree

Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

 

Example 1:

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.

Example 2:

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

Example 3:

Input: root = [2,1], p = 2, q = 1
Output: 2

 

Constraints:

    The number of nodes in the tree is in the range [2, 105].
    -109 <= Node.val <= 109
    All Node.val are unique.
    p != q
    p and q will exist in the BST.


```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (p.val < root.val && q.val < root.val) {
        // p 和 q 都在左子樹
        return lowestCommonAncestor(root.left, p, q);
    } else if (p.val > root.val && q.val > root.val) {
        // p 和 q 都在右子樹
        return lowestCommonAncestor(root.right, p, q);
    } else {
        // p 和 q 分別位於兩側（或其中一個是 root）
        return root;
    }
};
```



# *110. Balanced Binary Tree

Given a binary tree, determine if it is

.

 

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: true

Example 2:

Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

Example 3:

Input: root = []
Output: true

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    function check(node) {
        if (!node) return 0;

        const left = check(node.left);
        if (left === -1) return -1;

        const right = check(node.right);
        if (right === -1) return -1;

        if (Math.abs(left - right) > 1) return -1;

        return Math.max(left, right) + 1;
    }

    return check(root) !== -1;
};
```




# *141. Linked List Cycle

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

 

Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example 2:

Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Example 3:

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.

 

Constraints:

    The number of the nodes in the list is in the range [0, 104].
    -105 <= Node.val <= 105
    pos is -1 or a valid index in the linked-list.

 

Follow up: Can you solve it using O(1) (i.e. constant) memory?

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {

    const dummy = new ListNode(0);
    dummy.next = head;

    let slow = dummy;
    let fast = dummy.next;

    while(fast?.next?.next){
        if(fast === slow) return true;
        fast = fast.next.next;
        slow = slow.next;
    }

    return false;
};
```


## slow跟fast剛開始不能重合、不然自己指向自己，或是開頭就是環可能判斷不出來




# 232. Implement Queue using Stacks

Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

    void push(int x) Pushes element x to the back of the queue.
    int pop() Removes the element from the front of the queue and returns it.
    int peek() Returns the element at the front of the queue.
    boolean empty() Returns true if the queue is empty, false otherwise.

Notes:

    You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
    Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

 

Example 1:

Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false

 

Constraints:

    1 <= x <= 9
    At most 100 calls will be made to push, pop, peek, and empty.
    All the calls to pop and peek are valid.

 

Follow-up: Can you implement the queue such that each operation is amortized O(1) time complexity? In other words, performing n operations will take overall O(n) time even if one of those operations may take longer.


```js

var MyQueue = function() {
    this._stackA = [];
    this._stackB = [];
    this._length = 0;
}


MyQueue.prototype._aToB = function(x) {
    while(this._stackA.length>0){
        this._stackB.push(this._stackA.pop())
    } 
};
MyQueue.prototype._bToA = function(x) {
    while(this._stackB.length>0){
        this._stackA.push(this._stackB.pop())
    } 
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this._stackA.push(x);
    this._length++;    
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    this._aToB();
    
    if(this._stackB.length===0) return null;
    
    const result = this._stackB.pop();

    this._bToA();

    this._length--;

    return result;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    this._aToB();
    
    if(this._stackB.length===0) return null;
    
    const result = this._stackB[this._stackB.length-1];

    this._bToA();

    return result;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this._length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */


```







# *278. First Bad Version

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

 

Example 1:

Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.

Example 2:

Input: n = 1, bad = 1
Output: 1

 

Constraints:

    1 <= bad <= n <= 231 - 1



```js
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {

        let minVersion = 1;
        let maxVersion = n;

        while (minVersion < maxVersion) {
            const midVersion = Math.floor((minVersion + maxVersion) / 2);

            if (isBadVersion(midVersion)) {
                maxVersion = midVersion;
            } else {
                minVersion = midVersion + 1;
            }
        }

        const result = isBadVersion(minVersion) ? minVersion : maxVersion;

        return result;



        // let result = n;
        // while (n > 0) {
        //     if (isBadVersion(n)) result = n;
        //     n--;
        // }

        // return result;
    };
};
```





# *383. Ransom Note

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true

 

Constraints:

    1 <= ransomNote.length, magazine.length <= 105
    ransomNote and magazine consist of lowercase English letters.


```js
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const bucket = [...magazine].reduce((a, c) => {
        if (!a[c]) a[c] = 0;
        a[c]++;
        return a;
    }, {});

    for(let i = 0; i<ransomNote.length; i++){
        if(bucket[ransomNote[i]]>0){
            bucket[ransomNote[i]]--;
        }else{
            return false;
        }
    }
    return true;
};
```





# *70. Climbing Stairs

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

 

Constraints:

    1 <= n <= 45


```js


var climbStairs = function(n) {
    if (n <= 2) return n;

    let first = 1, second = 2;

    for (let i = 3; i <= n; i++) {
        let temp = first + second;
        first = second;
        second = temp;
    }

    return second;
};


/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {

    const dp = {
        "0": 1,
        "1": 1
    };

    return cal(n);

    function cal(n) {
        if (dp[n]) return dp[n];

        const n1 = cal(n - 1);
        const n2 = cal(n - 2);

        dp[n] = n1 + n2;

        return dp[n];
    }
};
```



# 409. Longest Palindrome

Given a string s which consists of lowercase or uppercase letters, return the length of the longest

 that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome.

 

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.

 

Constraints:

    1 <= s.length <= 2000
    s consists of lowercase and/or uppercase English letters only.

```js
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    const bucket = [...s].reduce((a, c) => {
        a[c] = a[c] ?? 0;
        a[c]++;
        return a;
    }, {});

    const evens = Object.keys(bucket).reduce((a, c) => a + Math.floor(bucket[c] / 2) * 2, 0);
    const odds = Object.keys(bucket).some(k => bucket[k] % 2 === 1) ? 1 : 0;

    return evens + odds;
};
```



# *206. Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:

Input: head = [1,2]
Output: [2,1]

Example 3:

Input: head = []
Output: []

 

Constraints:

    The number of nodes in the list is the range [0, 5000].
    -5000 <= Node.val <= 5000

 

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let current = head;
    let last = null;

    while(current){
        const next = current.next;

        current.next = last;

        last = current;
        current = next;
    }

    return last;
};
```


# 169. Majority Element

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

 

Constraints:

    n == nums.length
    1 <= n <= 5 * 104
    -109 <= nums[i] <= 109

 
Follow-up: Could you solve the problem in linear time and in O(1) space?

```js
var majorityElement = function(nums) {
    let count = 0;
    let candidate = null;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {

    const minCount = nums.length % 2 === 0
        ? nums.length / 2
        : Math.floor(nums.length / 2) + 1;

    const numBucketMap = {};
    let maxCounts = 1;
    let nOfMaxCounts = nums[0];

    for (let i = 0; i < nums.length; i++) {
        numBucketMap[nums[i]] = numBucketMap[nums[i]] ?? 0;
        numBucketMap[nums[i]]++;

        if (numBucketMap[nums[i]] >= minCount) return nums[i];

        if (numBucketMap[nums[i]] > maxCounts) {
            maxCounts = numBucketMap[nums[i]];
            nOfMaxCounts = nums[i];
        }
    }

    return nOfMaxCounts;
};
```




# *67. Add Binary

Given two binary strings a and b, return their sum as a binary string.

 

Example 1:

Input: a = "11", b = "1"
Output: "100"

Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

 

Constraints:

    1 <= a.length, b.length <= 104
    a and b consist only of '0' or '1' characters.
    Each string does not contain leading zeros except for the zero itself.


```js
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {

    const long = a.length >= b.length ? a : b;
    let short = a.length >= b.length ? b : a;

    let diff = long.length - short.length;

    while (diff) {
        short = "0" + short;
        diff--;
    }

    let carry = "0";
    let result = "";
    for (let i = long.length - 1; i >= 0; i--) {
        let n = carry === "1" ? 1 : 0;
        n += long[i] === "1" ? 1 : 0;
        n += short[i] === "1" ? 1 : 0;

        switch (n) {
            case 3: result = "1" + result; break;
            case 2: carry = "1"; result = "0" + result; break;
            case 1: carry = "0"; result = "1" + result; break;
            default: result = "0" + result; break;
        }
    }

    return carry === "1" ? "1" + result : result;
};
```

## 注意：js的`const s = "abc"; s[2] = "d";`不會改變s!!
## 二進位數值太長可能導致超過long的範圍




# *543. Diameter of Binary Tree

Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

 

Example 1:

Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

Example 2:

Input: root = [1,2]
Output: 1

 

Constraints:

    The number of nodes in the tree is in the range [1, 104].
    -100 <= Node.val <= 100

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0;

    function dfs(node) {
        if (!node) return 0;

        let left = dfs(node.left);
        let right = dfs(node.right);

        // 更新最大直徑（路徑長度 = 左高 + 右高）
        maxDiameter = Math.max(maxDiameter, left + right);

        // 回傳當前節點的最大深度
        return Math.max(left, right) + 1;
    }

    dfs(root);
    return maxDiameter;
};
```


# 876. Middle of the Linked List

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:

Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Example 2:

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

 

Constraints:

    The number of nodes in the list is in the range [1, 100].
    1 <= Node.val <= 100

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let fast = head;
    let slow = head;

    while(fast?.next){
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
};
```


# *104. Maximum Depth of Binary Tree

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:

Input: root = [1,null,2]
Output: 2

 

Constraints:

    The number of nodes in the tree is in the range [0, 104].
    -100 <= Node.val <= 100

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {

    return cal(root, 0);
    
    function cal(node, depth){
        if(!node) return depth;

        return Math.max(cal(node.left, depth + 1), cal(node.right, depth + 1));
    }
};
```


# 217. Contains Duplicate

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.

Example 2:

Input: nums = [1,2,3,4]

Output: false

Explanation:

All elements are distinct.

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]

Output: true

 

Constraints:

    1 <= nums.length <= 105
    -109 <= nums[i] <= 109


```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //return new Set(nums).size !== nums.length;
    const map = {}

    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]]) return true;
        map[nums[i]] = true;
    }
    
    return false;
};
```


# *53. Maximum Subarray

Given an integer array nums, find the

with the largest sum, and return its sum.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.

Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

 

Constraints:

    1 <= nums.length <= 105
    -104 <= nums[i] <= 104

 

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.


```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // 決定是否從頭開始還是累加
        currSum = Math.max(nums[i], currSum + nums[i]);
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
};
```




# ***57. Insert Interval

You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

Note that you don't need to modify intervals in-place. You can make a new array and return it.

 

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

 

Constraints:

    0 <= intervals.length <= 104
    intervals[i].length == 2
    0 <= starti <= endi <= 105
    intervals is sorted by starti in ascending order.
    newInterval.length == 2
    0 <= start <= end <= 105


```js
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let result = [];
    let i = 0;
    const n = intervals.length;

    // 1. 加入所有結尾在 newInterval 之前的區間
    while (i < n && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }

    // 2. 合併所有與 newInterval 有重疊的區間
    while (i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    result.push(newInterval); // 插入合併後的新區間

    // 3. 加入剩下的區間
    while (i < n) {
        result.push(intervals[i]);
        i++;
    }

    return result;
};




```




# ***542. 01 Matrix

Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

The distance between two cells sharing a common edge is 1.

 

Example 1:

Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
Output: [[0,0,0],[0,1,0],[0,0,0]]

Example 2:

Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
Output: [[0,0,0],[0,1,0],[1,2,1]]

 

Constraints:

    m == mat.length
    n == mat[i].length
    1 <= m, n <= 104
    1 <= m * n <= 104
    mat[i][j] is either 0 or 1.
    There is at least one 0 in mat.

 

Note: This question is the same as 1765: https://leetcode.com/problems/map-of-highest-peak/



```js

var updateMatrix = function (mat) {
    const m = mat.length;
    const n = mat[0].length;
    const queue = [];
    const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j]);
            } else {
                mat[i][j] = null;
            }
        }
    }

    // BFS 遍歷
    while (queue.length > 0) {
        const [i, j] = queue.shift();
        for (const [dx, dy] of dirs) {
            const x = i + dx;
            const y = j + dy;
            if (x >= 0 && x < m && y >= 0 && y < n && mat[x][y] === null) {
                mat[x][y] = mat[i][j] + 1;
                queue.push([x, y]);
            }
        }
    }

    return mat;
};

```




# 973. K Closest Points to Origin

Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

 

Example 1:

Input: points = [[1,3],[-2,2]], k = 1
Output: [[-2,2]]
Explanation:
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].

Example 2:

Input: points = [[3,3],[5,-1],[-2,4]], k = 2
Output: [[3,3],[-2,4]]
Explanation: The answer [[-2,4],[3,3]] would also be accepted.

 

Constraints:

    1 <= k <= points.length <= 104
    -104 <= xi, yi <= 104



```js
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    const newPoints = points.map(p => {
        return {
            x: p[0],
            y: p[1],
            d2: p[0] * p[0] + p[1] * p[1]
        };
    }).sort((a, b) => a.d2 - b.d2);

    return newPoints.filter((_, i) => i < k).map(p => [p.x, p.y]);
};
```



# 3. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest

without duplicate characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

 

Constraints:

    0 <= s.length <= 5 * 104
    s consists of English letters, digits, symbols and spaces.

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let l = 0;
    let r = 0;
    let maxCounts = 0;

    const map = {};

    while (l <= r && r < s.length) {
        if (!map[s[r]]) {
            map[s[r]] = 1;

            let counts = r - l + 1;

            maxCounts = Math.max(maxCounts, counts);
            r++;
        } else {
            map[s[l]]--;
            l++;
        }
    }

    return maxCounts;
};
```


# *15. 3Sum
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

 

Constraints:

    3 <= nums.length <= 3000
    -105 <= nums[i] <= 105

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b); // 先排序
    const res = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // 跳過重複的 a

        let l = i + 1;
        let r = nums.length - 1;

        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];

            if (sum === 0) {
                res.push([nums[i], nums[l], nums[r]]);
                // 移動左指針並跳過重複
                while (l < r && nums[l] === nums[l + 1]) l++;
                // 移動右指針並跳過重複
                while (l < r && nums[r] === nums[r - 1]) r--;
                l++;
                r--;
            } else if (sum < 0) {
                l++;
            } else {
                r--;
            }
        }
    }

    return res;
};




```



# *102. Binary Tree Level Order Traversal

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:

Input: root = [1]
Output: [[1]]

Example 3:

Input: root = []
Output: []

 

Constraints:

    The number of nodes in the tree is in the range [0, 2000].
    -1000 <= Node.val <= 1000


```js
var levelOrder = function(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        const level = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift(); // 取出當層節點
            level.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(level);
    }

    return result;
};
```



# *133. Clone Graph

Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}

 

Test case format:

For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

 

Example 1:

Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]
Explanation: There are 4 nodes in the graph.
1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).

Example 2:

Input: adjList = [[]]
Output: [[]]
Explanation: Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.

Example 3:

Input: adjList = []
Output: []
Explanation: This an empty graph, it does not have any nodes.

 

Constraints:

    The number of nodes in the graph is in the range [0, 100].
    1 <= Node.val <= 100
    Node.val is unique for each node.
    There are no repeated edges and no self-loops in the graph.
    The Graph is connected and all nodes can be visited starting from the given node.


```js
/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if (!node) return null;

    const visited = new Map();
    const queue = [node];
    visited.set(node, new Node(node.val));

    while (queue.length > 0) {
        const current = queue.shift();

        for (const neighbor of current.neighbors) {
            if (!visited.has(neighbor)) {
                visited.set(neighbor, new Node(neighbor.val));
                queue.push(neighbor);
            }
            visited.get(current).neighbors.push(visited.get(neighbor));
        }
    }

    return visited.get(node);
};

```

## 注意`for (const neighbor in current.neighbors)`的`neighbor`代表的是下標




# *150. Evaluate Reverse Polish Notation

You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

    The valid operators are '+', '-', '*', and '/'.
    Each operand may be an integer or another expression.
    The division between two integers always truncates toward zero.
    There will not be any division by zero.
    The input represents a valid arithmetic expression in a reverse polish notation.
    The answer and all the intermediate calculations can be represented in a 32-bit integer.

 

Example 1:

Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9

Example 2:

Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6

Example 3:

Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22

 

Constraints:

    1 <= tokens.length <= 104
    tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].



```js
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {

    const nums = [];

    const calOperators = {
        "+": (a, b) => a + b,
        "-": (a, b) => b - a,
        "*": (a, b) => a * b,
        "/": (a, b) => Math.trunc(b / a)
    };

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        if (calOperators[token]) {
            nums.push(calOperators[token](nums.pop(), nums.pop()));
        } else {
            nums.push(Number(token));
        }
    }

    return nums[0];
};
```

# 注意`Math.trunc`和`Math.floor`的差別，前者-4.7變為-4；後者-4.7變為-5




# *207. Course Schedule

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

    For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.

Return true if you can finish all courses. Otherwise, return false.

 

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.

Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

 

Constraints:

    1 <= numCourses <= 2000
    0 <= prerequisites.length <= 5000
    prerequisites[i].length == 2
    0 <= ai, bi < numCourses
    All the pairs prerequisites[i] are unique.



```js
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = Array.from({ length: numCourses }, () => []);
    for (const [course, pre] of prerequisites) {
        graph[pre].push(course);
    }

    const visited = new Array(numCourses).fill(0); // 0=未訪問, 1=訪問中, 2=已訪問完

    function hasCycle(node) {
        if (visited[node] === 1) return true;   // 發現循環
        if (visited[node] === 2) return false;  // 已檢查過

        visited[node] = 1; // 標記為訪問中

        for (const neighbor of graph[node]) {
            if (hasCycle(neighbor)) return true;
        }

        visited[node] = 2; // 標記為已完成
        return false;
    }

    for (let i = 0; i < numCourses; i++) {
        if (hasCycle(i)) return false;
    }

    return true;
};
```

# 208. Implement Trie (Prefix Tree)

A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

    Trie() Initializes the trie object.
    void insert(String word) Inserts the string word into the trie.
    boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
    boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

 

Example 1:

Input
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
Output
[null, null, true, false, true, null, true]

Explanation
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True

 

Constraints:

    1 <= word.length, prefix.length <= 2000
    word and prefix consist only of lowercase English letters.
    At most 3 * 104 calls in total will be made to insert, search, and startsWith.


```js

var Trie = function () {
    this._map = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let currentNode = this._map;
    for (let i = 0; i < word.length; i++) {
        if(!currentNode[word[i]]) currentNode[word[i]] = {};
        currentNode = currentNode[word[i]];
    }
    currentNode["."] = true; // 可以用class維持
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let currentNode = this._map;
    for (let i = 0; i < word.length; i++) {
        if(!currentNode[word[i]]) return false;
        currentNode = currentNode[word[i]];
    }
    return currentNode["."] ?? false;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let currentNode = this._map;
    for (let i = 0; i < prefix.length; i++) {
        if(!currentNode[prefix[i]]) return false;
        currentNode = currentNode[prefix[i]];
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
```




# ***322. Coin Change

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

 

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example 2:

Input: coins = [2], amount = 3
Output: -1

Example 3:

Input: coins = [1], amount = 0
Output: 0

 

Constraints:

    1 <= coins.length <= 12
    1 <= coins[i] <= 231 - 1
    0 <= amount <= 104

```js
var coinChange = function(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};
```



# *238. Product of Array Except Self

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

 

Constraints:

    2 <= nums.length <= 105
    -30 <= nums[i] <= 30
    The input is generated such that answer[i] is guaranteed to fit in a 32-bit integer.

 

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)



```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const res = new Array(n).fill(1);

    // 左邊的乘積
    let left = 1;
    for (let i = 0; i < n; i++) {
        res[i] = left;
        left *= nums[i];
    }

    // 右邊的乘積
    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= right;
        right *= nums[i];
    }

    return res;
};
```




# 155. Min Stack

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

    MinStack() initializes the stack object.
    void push(int val) pushes the element val onto the stack.
    void pop() removes the element on the top of the stack.
    int top() gets the top element of the stack.
    int getMin() retrieves the minimum element in the stack.

You must implement a solution with O(1) time complexity for each function.

 

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2

 

Constraints:

    -231 <= val <= 231 - 1
    Methods pop, top and getMin operations will always be called on non-empty stacks.
    At most 3 * 104 calls will be made to push, pop, top, and getMin.

```js

var MinStack = function() {
    this._stack = [];
    this._stackMin = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this._stack.push(val);
    const min = Math.min(this.getMin() ?? val, val);
    this._stackMin.push(min);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this._stack.pop();
    this._stackMin.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this._stack[this._stackMin.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this._stackMin[this._stackMin.length-1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```






# *98. Validate Binary Search Tree

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

    The left 

    of a node contains only nodes with keys less than the node's key.
    The right subtree of a node contains only nodes with keys greater than the node's key.
    Both the left and right subtrees must also be binary search trees.

 

Example 1:

Input: root = [2,1,3]
Output: true

Example 2:

Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

 

Constraints:

    The number of nodes in the tree is in the range [1, 104].
    -231 <= Node.val <= 231 - 1



```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    return isValid(root, -Infinity, Infinity);

    function isValid(node, lower, upper) {
        if (!node) return true;
        if (node.val <= lower || node.val >= upper) return false;
        return isValid(node.left, lower, node.val) && isValid(node.right, node.val, upper);
    }
};
```


# ***200. Number of Islands

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

 

Constraints:

    m == grid.length
    n == grid[i].length
    1 <= m, n <= 300
    grid[i][j] is '0' or '1'.




# ***994. Rotting Oranges

You are given an m x n grid where each cell can have one of three values:

    0 representing an empty cell,
    1 representing a fresh orange, or
    2 representing a rotten orange.

Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

 

Example 1:

Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

Example 2:

Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

Example 3:

Input: grid = [[0,2]]
Output: 0
Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

 

Constraints:

    m == grid.length
    n == grid[i].length
    1 <= m, n <= 10
    grid[i][j] is 0, 1, or 2.



```js
var orangesRotting = function(grid) {
    const m = grid.length, n = grid[0].length;
    const queue = [];
    let fresh = 0;

    // 初始化：記錄所有腐爛橘子的位置，並統計新鮮橘子
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 2) queue.push([i, j]);
            else if (grid[i][j] === 1) fresh++;
        }
    }

    if (fresh === 0) return 0; // 沒有新鮮橘子，直接回傳 0

    let minutes = 0;
    const dirs = [[1,0], [-1,0], [0,1], [0,-1]];

    while (queue.length > 0 && fresh > 0) {
        let size = queue.length;
        while (size--) {
            const [x, y] = queue.shift();
            for (let [dx, dy] of dirs) {
                const nx = x + dx, ny = y + dy;
                if (
                    nx >= 0 && nx < m &&
                    ny >= 0 && ny < n &&
                    grid[nx][ny] === 1
                ) {
                    grid[nx][ny] = 2;
                    fresh--;
                    queue.push([nx, ny]);
                }
            }
        }
        minutes++;
    }

    return fresh === 0 ? minutes : -1;
};
```




# *****33. Search in Rotated Sorted Array

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Example 3:

Input: nums = [1], target = 0
Output: -1

 

Constraints:

    1 <= nums.length <= 5000
    -104 <= nums[i] <= 104
    All values of nums are unique.
    nums is an ascending array that is possibly rotated.
    -104 <= target <= 104


```js
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        // 左半邊是有序的
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        // 右半邊是有序的
        else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
};
```

i
# ***39. Combination Sum

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from canddates an unlimited number of times. Two combinations are unique if the

of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

 

Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.

Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]

Example 3:

Input: candidates = [2], target = 1
Output: []

 

Constraints:

    1 <= candidates.length <= 30
    2 <= candidates[i] <= 40
    All elements of candidates are distinct.
    1 <= target <= 40

```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
    const result = [];

    function backtrack(start, path, sum) {
        if (sum === target) {
            result.push([...path]);
            return;
        }

        if (sum > target) return;

        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i]);
            backtrack(i, path, sum + candidates[i]); // 可重複使用同一數字，所以是 i 不是 i + 1
            path.pop(); // 回溯
        }
    }

    backtrack(0, [], 0);
    return result;
}
```

# `const ary = new Array(target + 1).fill([]);`小心這樣寫的陣列都一樣





# 46. Permutations

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
 

Constraints:

1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.


```js
var permute = function(nums) {
    const res = [];
    const used = new Array(nums.length).fill(false);

    function backtrack(path) {
        if (path.length === nums.length) {
            res.push([...path]); // 複製 path
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            path.push(nums[i]);
            used[i] = true;
            backtrack(path);
            path.pop();
            used[i] = false;
        }
    }

    backtrack([]);
    return res;
};

```

## 展開
```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    return cal([new Array(nums.length).fill(null)], 0);

    function cal(arys, numIdx) {
        const result = [];

        for (let aryIdx = 0; aryIdx < arys.length; aryIdx++) {
            const ary = arys[aryIdx];

            for (let i = 0; i < ary.length; i++) {
                if (ary[i] !== null) continue;
                const newAry = [...ary];
                newAry[i] = nums[numIdx];
                result.push(newAry);
            }
        }
        
        if (numIdx < nums.length) {
            return cal(result, numIdx + 1);
        } else {
            return arys;
        }
    }
};

```


# 56. Merge Intervals

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104

```js
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    const result = [];
    let i = 0;
    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < intervals.length; i++) {

        let [n0, n1] = intervals[i];
        while (intervals[i + 1] && n1 >= intervals[i + 1][0]) {
            n1 = Math.max(n1, intervals[i + 1][1]);
            i++;
        }
        result.push([n0, n1]);

    }
    return result;
};
```

# 236. Lowest Common Ancestor of a Binary Tree

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

 

Example 1:


Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
Example 2:


Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
Example 3:

Input: root = [1,2], p = 1, q = 2
Output: 1
 

Constraints:

The number of nodes in the tree is in the range [2, 105].
-109 <= Node.val <= 109
All Node.val are unique.
p != q
p and q will exist in the tree.


```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (!root || root === p || root === q) return root;

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if (left && right) return root;

    return left ? left : right;
};

```



# 981. Time Based Key-Value Store

Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

Implement the TimeMap class:

TimeMap() Initializes the object of the data structure.
void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".
 

Example 1:

Input
["TimeMap", "set", "get", "get", "set", "get", "get"]
[[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]
Output
[null, null, "bar", "bar", null, "bar2", "bar2"]

Explanation
TimeMap timeMap = new TimeMap();
timeMap.set("foo", "bar", 1);  // store the key "foo" and value "bar" along with timestamp = 1.
timeMap.get("foo", 1);         // return "bar"
timeMap.get("foo", 3);         // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
timeMap.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
timeMap.get("foo", 4);         // return "bar2"
timeMap.get("foo", 5);         // return "bar2"
 

Constraints:

1 <= key.length, value.length <= 100
key and value consist of lowercase English letters and digits.
1 <= timestamp <= 107
All the timestamps timestamp of set are strictly increasing.
At most 2 * 105 calls will be made to set and get.
```js

var TimeMap = function () {
    this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
    if (!this.map.has(key)) {
        this.map.set(key, []);
    }
    this.map.get(key).push({ timestamp, value });
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
    if (!this.map.has(key)) return "";

    const arr = this.map.get(key);
    let l = 0;
    let r = arr.length - 1;
    let result = "";


    while (l <= r) {
        const mid = Math.floor((l + r) / 2);

        if (arr[mid].timestamp === timestamp) return arr[mid].value;

        if (arr[mid].timestamp < timestamp) {
            result = arr[mid].value;
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    return result;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
```



# 721. Accounts Merge

Given a list of accounts where each element accounts[i] is a list of strings, where the first element accounts[i][0] is a name, and the rest of the elements are emails representing emails of the account.

Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some common email to both accounts. Note that even if two accounts have the same name, they may belong to different people as people could have the same name. A person can have any number of accounts initially, but all of their accounts definitely have the same name.

After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails in sorted order. The accounts themselves can be returned in any order.

 

Example 1:

Input: accounts = [["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
Output: [["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
Explanation:
The first and second John's are the same person as they have the common email "johnsmith@mail.com".
The third John and Mary are different people as none of their email addresses are used by other accounts.
We could return these lists in any order, for example the answer [['Mary', 'mary@mail.com'], ['John', 'johnnybravo@mail.com'], 
['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']] would still be accepted.
Example 2:

Input: accounts = [["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe1@m.co"],["Kevin","Kevin3@m.co","Kevin5@m.co","Kevin0@m.co"],["Ethan","Ethan5@m.co","Ethan4@m.co","Ethan0@m.co"],["Hanzo","Hanzo3@m.co","Hanzo1@m.co","Hanzo0@m.co"],["Fern","Fern5@m.co","Fern1@m.co","Fern0@m.co"]]
Output: [["Ethan","Ethan0@m.co","Ethan4@m.co","Ethan5@m.co"],["Gabe","Gabe0@m.co","Gabe1@m.co","Gabe3@m.co"],["Hanzo","Hanzo0@m.co","Hanzo1@m.co","Hanzo3@m.co"],["Kevin","Kevin0@m.co","Kevin3@m.co","Kevin5@m.co"],["Fern","Fern0@m.co","Fern1@m.co","Fern5@m.co"]]
 

Constraints:

1 <= accounts.length <= 1000
2 <= accounts[i].length <= 10
1 <= accounts[i][j].length <= 30
accounts[i][0] consists of English letters.
accounts[i][j] (for j > 0) is a valid email.



```js
function accountsMerge(accounts) {
    const emailToName = new Map();
    const parent = new Map();

    // 初始化
    function find(email) {
        if (parent.get(email) !== email) {
            parent.set(email, find(parent.get(email)));
        }
        return parent.get(email);
    }

    function union(email1, email2) {
        const p1 = find(email1);
        const p2 = find(email2);
        if (p1 !== p2) parent.set(p2, p1);
    }

    // 構建 union-find 結構
    for (let account of accounts) {
        const name = account[0];
        for (let i = 1; i < account.length; i++) {
            emailToName.set(account[i], name);
            if (!parent.has(account[i])) parent.set(account[i], account[i]);
        }

        for (let i = 2; i < account.length; i++) {
            union(account[1], account[i]);
        }
    }

    // 分組：email root -> 所有相關 email
    const unions = new Map();
    for (let email of emailToName.keys()) {
        const root = find(email);
        if (!unions.has(root)) unions.set(root, []);
        unions.get(root).push(email);
    }

    // 建構結果
    const res = [];
    for (let [root, emails] of unions.entries()) {
        emails.sort();
        res.push([emailToName.get(root), ...emails]);
    }

    return res;
}
```

```js
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
    const emailNameMap = {};
    const emailGraph = {};

    for (const account of accounts) {
        for (let i = 1; i < account.length; i++) {
            emailNameMap[account[i]] = account[0];

            if (!emailGraph[account[i]]) {
                emailGraph[account[i]] = [];
            }

            for (let j = 1; j < account.length; j++) {
                if (i === j) continue;
                emailGraph[account[i]].push(account[j]);
            }
        }
    }

    const result = [];

    for (const email in emailGraph) {
        const user = result.find(r => r.some(e => e === email));

        if (user) continue;

        const userEmails = [email];

        const visited = {};
        visited[email] = true;
        extract(userEmails, emailGraph[email], visited);

        userEmails.sort();

        result.push([emailNameMap[email], ...userEmails]);
    }

    return result;

    function extract(userEmails, emails, visited) {
        for (const email of emails) {
            if (visited[email]) continue;
            userEmails.push(email);

            visited[email] = true;
            extract(userEmails, emailGraph[email], visited);
        }
    }

};
```


# 75. Sort Colors
Solved
Medium
Topics
premium lock icon
Companies
Hint
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
 

Constraints:

n == nums.length
1 <= n <= 300
nums[i] is either 0, 1, or 2.
 

Follow up: Could you come up with a one-pass algorithm using only constant extra space?


```js
var sortColors = function(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else { // nums[mid] === 2
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
};
```

```js
var sortColors = function(nums) {
    let count = [0, 0, 0];

    for (let n of nums) {
        count[n]++;
    }

    let idx = 0;
    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j < count[i]; j++) {
            nums[idx++] = i;
        }
    }
};
```



