var array = [1,1,'1'];

// 方法一：indexOf()
// 创建一个新数组，遍历原数组，用indexOf判断原数组中的值是否已经存在，不存在就push进去
function unique(arr){
    var res = [];
    for(let item of arr){
        if(res.indexOf(item) === -1){
            res.push(item);
        }
    }
    return res;
}


// 方法二：排序后去重
function unique(arr){
    var res = [];
    var newArr = arr.sort();
    for(let i=0; i<newArr.length; i++){
        if(newArr[i] !== newArr[i+1]){
            res.push(newArr[i]);
        }
    }
    return res;
}

// 方法三：利用Set的唯一性
function unique(arr){
    return Array.from(new Set(arr));
}

// 方法四：Map
function unique (arr) {
    const map = new Map()
    return arr.filter((a) => !map.has(a) && map.set(a, 1))
}

console.log(unique(array));
