/*
Hard | 35 mins
25. Reverse Nodes in k-Group
K组反转链表节点
*/

function ListNode(val, next = null) {
	this.val = val;
	this.next = next;
}

// 辅助函数：从数组创建链表
ListNode.fromArray = function(arr) {
	if (!arr || arr.length === 0) return null;
	let head = new ListNode(arr[0]);
	let current = head;
	for (let i = 1; i < arr.length; i++) {
		current.next = new ListNode(arr[i]);
		current = current.next;
	}
	return head;
};

// 辅助函数：将链表转为数组
ListNode.toArray = function(head) {
	const result = [];
	while (head) {
		result.push(head.val);
		head = head.next;
	}
	return result;
};

var reverseKGroup = function (head, k) {
	// 检查是否有k个节点
	let curr = head;
	for (let i = 0; i < k; i++) {
		if (curr === null) {
			return head;
		}
		curr = curr.next;
	}

	// 反转前k个节点
	let prev = null;
	curr = head;
	for (let i = 0; i < k; i++) {
		const next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}

	// 递归处理剩余节点
	head.next = reverseKGroup(curr, k);

	return prev;
};

let head = ListNode.fromArray([1, 2, 3, 4, 5]);
console.log(ListNode.toArray(reverseKGroup(head, 2))); // [2, 1, 4, 3, 5]

head = ListNode.fromArray([1, 2, 3, 4, 5]);
console.log(ListNode.toArray(reverseKGroup(head, 3))); // [3, 2, 1, 4, 5]

// node Grind169/ans/8-12-ans1.js
