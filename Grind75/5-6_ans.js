var TimeMap = function () {
    this.map = new Map();
};

TimeMap.prototype.set = function (key, value, timestamp) {
    if (!this.map.has(key)) {
        this.map.set(key, []);
    }
    this.map.get(key).push([timestamp, value]);
};

TimeMap.prototype.get = function (key, timestamp) {
    if (!this.map.has(key)) {
        return "";
    }
    
    const values = this.map.get(key);
    let left = 0, right = values.length - 1;
    let result = "";
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (values[mid][0] <= timestamp) {
            result = values[mid][1];
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
};

// Test cases
let timeMap = new TimeMap();
timeMap.set("foo", "bar", 1);
console.log(timeMap.get("foo", 1));      // "bar"
console.log(timeMap.get("foo", 3));      // "bar"
timeMap.set("foo", "baz", 3);
console.log(timeMap.get("foo", 3));      // "baz"
console.log(timeMap.get("foo", 4));      // "baz"
