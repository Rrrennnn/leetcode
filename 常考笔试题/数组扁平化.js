var arr = [1, [2, [3, 4]]];

// 方法一：循环数组，如果里面还是数组，递归调用扁平化方法
function flatten(arr) {
    var result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]));
        } else {
            result.push(arr[i])
        }
    }
    return result;
}

// 方法一的改进写法
function flatten(arr) {
    return arr.reduce(function (pre, item) {
        return pre.concat(Array.isArray(item) ? flatten(item) : item)
    }, []);
}

// 方法二：toString(),它的一个缺点是改变了元素的类型，只适合于数组中元素都是整数的情况
function flatten(arr) {
    return arr.toString().split(",").map(function (item) {
        return +item;
    })
}

console.log(flatten(arr));