// 实现浅拷贝
// 遍历对象，然后把属性和属性值都放到一个新对象里
var shallowCopy = function(obj) {
    // 只拷贝对象
    if (typeof obj !== 'object') return;
    // 根据obj的类型判断是新建一个数组还是对象
    var newObj = obj instanceof Array ? [] : {};
    // 遍历obj，并且判断是obj的属性才拷贝
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}


// 实现深拷贝
// 在拷贝的时候判断一下属性值的类型，如果是对象，再递归拷贝一下
var deepCopy = function(obj){
    if(typeof(obj) !== "object") return;
    var newObj = obj instanceof Array ? [] : {};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key] = typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key];
        }
    }
    return newObj;
}