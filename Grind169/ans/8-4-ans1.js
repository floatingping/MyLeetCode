/*
Hard | 35 mins
32. Longest Valid Parentheses
使用栈来追踪有效括号的边界
*/

var longestValidParentheses = function (s) {
	const stack = [-1];
	let maxLen = 0;

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(') {
			stack.push(i);
		} else {
			// ')'
			stack.pop();

			if (stack.length === 0) {
				// 没有匹配的'('，当前')'成为新的基准
				stack.push(i);
			} else {
				// 有匹配的'('，计算当前有效长度
				maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
			}
		}
	}

	return maxLen;
};

console.log(longestValidParentheses("(()")); // 2
console.log(longestValidParentheses(")()())")); // 4
console.log(longestValidParentheses("")); // 0

// node Grind169/ans/8-4-ans1.js
