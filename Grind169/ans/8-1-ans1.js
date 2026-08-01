/*
Hard | 40 mins
895. Maximum Frequency Stack
使用Map记录频率，Map记录每个频率对应的栈
*/

class FreqStack {
	constructor() {
		this.freq = new Map(); // val -> frequency
		this.freqStack = new Map(); // frequency -> stack of values
		this.maxFreq = 0;
	}

	push(val) {
		// 更新频率
		const f = (this.freq.get(val) || 0) + 1;
		this.freq.set(val, f);

		// 如果该频率的栈不存在，创建
		if (!this.freqStack.has(f)) {
			this.freqStack.set(f, []);
		}
		// 将val添加到频率栈
		this.freqStack.get(f).push(val);

		// 更新最大频率
		this.maxFreq = Math.max(this.maxFreq, f);
	}

	pop() {
		// 从最高频率的栈中弹出最近添加的值
		const val = this.freqStack.get(this.maxFreq).pop();

		// 更新该值的频率
		const f = this.freq.get(val);
		this.freq.set(val, f - 1);

		// 如果最高频率栈为空，减少最大频率
		if (this.freqStack.get(this.maxFreq).length === 0) {
			this.maxFreq--;
		}

		return val;
	}
}

const freqStack = new FreqStack();
freqStack.push(5);
freqStack.push(7);
freqStack.push(5);
freqStack.push(7);
freqStack.push(4);
freqStack.push(5);
console.log(freqStack.pop()); // 5
console.log(freqStack.pop()); // 7
console.log(freqStack.pop()); // 5
console.log(freqStack.pop()); // 4

// node Grind169/ans/8-1-ans1.js
