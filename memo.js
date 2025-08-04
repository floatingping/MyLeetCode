





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








