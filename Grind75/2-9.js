/**
 * LeetCode Grind 75 - 2-9
 * Middle of the Linked List (Easy - 20 mins)
 * 
 * Given the head of a singly linked list, return the middle node of the linked list.
 * 
 * If there are two middle nodes, return the second middle node.
 * 
 * Example 1:
 * Input: head = [1,2,3,4,5]
 * Output: [3,4,5]
 * Explanation: The middle node of the list is node 3.
 * 
 * Example 2:
 * Input: head = [1,2,3,4,5,6]
 * Output: [4,5,6]
 * Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 * 
 * Constraints:
 * - The number of nodes in the list is in the range [1, 100].
 * - 1 <= Node.val <= 100
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
var middleOfList = function(head) {
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
const middle1 = middleOfList(list1);
console.log("Expected: [3,4,5], Got:", listToArray(middle1));

// 測試案例 2
console.log("\n=== Test Case 2 ===");
const list2 = createList([1, 2, 3, 4, 5, 6]);
const middle2 = middleOfList(list2);
console.log("Expected: [4,5,6], Got:", listToArray(middle2));

// 測試案例 3
console.log("\n=== Test Case 3 ===");
const list3 = createList([1]);
const middle3 = middleOfList(list3);
console.log("Expected: [1], Got:", listToArray(middle3));
