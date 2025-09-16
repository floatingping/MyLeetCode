





console.log("appleBanana".substring(0));  //appleBanana
console.log("appleBanana".substring(0, 5)); //apple 不包含5
console.log("appleBanana".substring(5)); //Banana
console.log("appleBanana".substring(5, 11)); //Banana 到11-1=10
console.log("appleBanana".substring(5, 12)); //Banana 到12-1=11也可以，但容易讓人誤會
console.log("appleBanana".substring(5, 10)); //Banan 到10-1=9



// Set使用
const set = new Set();
set.add("apple");
set.add("banana");
console.log(set.has("apple"));
set.delete("banana");
set.add("orange");
set.delete("apple");
console.log(set);



// Map使用
const map = new Map();
map.set("name", "John");
map.set("age", 30);
console.log(map.get("name"));
map.set("age", 31);
map.delete("name");
console.log(map);


const INT_MAX = 2 ** 31 - 1;
const INT_MIN = -(2 ** 31);

// 正則使用





//01背包

//完全背包

//有限背包

//多重背包
//分组背包




[1, 2, 3, 4, 5].slice(1); // [2, 3, 4, 5]
[1, 2, 3, 4, 5].slice(1, 3); // [2, 3] //不包含3


[3, 1, 2].sort((a, b) => a - b); // [1, 2, 3]  //a-b升序、會修改原陣列
["March", "Jan", "Feb", "Dec"].sort(); // ["Dec", "Feb", "Jan", "March"] //字母順序排序
[1, 30, 4, 21, 100000].sort(); // [1, 100000, 21, 30, 4] //數字排序會轉成字串比較




Object.keys({ a: 3, b: 4, c: 5 }); // ["a", "b", "c"]
Object.values({ a: 3, b: 4, c: 5 }); // [3, 4, 5]



2 ** 31 - 1; // 2147483647
-(2 ** 31); // -2147483648



Array.from({ length: 2 }, () => new Array(3).fill(1)); // [[1, 1, 1], [1, 1, 1]] 2x3陣列


"ab".charCodeAt(0); // 97 取得字元的Unicode編碼
"ab".charCodeAt(1); // 98 取得字元的Unicode編碼




