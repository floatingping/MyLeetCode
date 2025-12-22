/**
 * LeetCode Grind 75 - 2-5
 * Reverse Linked List (Easy - 20 mins)
 * 
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * 
 * Example 1:
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 * 
 * Example 2:
 * Input: head = [1,2]
 * Output: [2,1]
 * 
 * Example 3:
 * Input: head = []
 * Output: []
 * 
 * Constraints:
 * - The number of nodes in the list is the range [0, 5000].
 * - -5000 <= Node.val <= 5000
 */

/**
 * Definition for singly-linked list node.
 */
function ListNode(val = 0, next = null) {
    this.val = val;
    this.next = next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // TODO: 補充你的程式碼
};

// Helper function: 從陣列建立 Linked List
function createList(arr) {
    if (!arr || arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function: 將 Linked List 轉換為陣列
function listToArray(head) {
    const arr = [];
    let current = head;
    while (current) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}

// 測試案例 1
console.log("=== Test Case 1 ===");
const list1 = createList([1, 2, 3, 4, 5]);
const reversed1 = reverseList(list1);
console.log("Expected: [5,4,3,2,1], Got:", listToArray(reversed1));

// 測試案例 2
console.log("\n=== Test Case 2 ===");
const list2 = createList([1, 2]);
const reversed2 = reverseList(list2);
console.log("Expected: [2,1], Got:", listToArray(reversed2));

// 測試案例 3
console.log("\n=== Test Case 3 ===");
const list3 = createList([]);
const reversed3 = reverseList(list3);
console.log("Expected: [], Got:", listToArray(reversed3));
