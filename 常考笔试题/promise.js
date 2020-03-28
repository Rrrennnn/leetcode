// promise.all 实现
// promise.all(iterable)返回一个新的promise实例。
// 此实例在iterable参数内所有的promise都fulfilled或者参数中不包含promise时，状态才变成fulfilled；
// 如果参数中有一个失败rejected，此实例回调失败，失败的信息是第一个失败promise的返回结果

Promise.all_ = function(promises) {
    return new Promise((resolve, reject) => {
        // Array.from()可将可迭代对象转化为数组
        promises = Array.from(promises);
        if(promises.length===0) {
            resolve([]);
        } else {
            let result = [];
            let index = 0;
            for(let i=0; i<promises.length; i++) {
                // 考虑到promise[i]可能是thenable对象也可能是普通值
                Promise.resolve(promises[i]).then(data => {
                    result[i] = data;
                    if(++index===promises.length) {
                        // 所有的promise状态都是fulfilled，promise.all返回的实例才变成fulfilled状态
                        resolve(result);
                    }
                }, err => {
                    reject(err);
                    return;
                })
            }
        }
    })
}


// promise.race
// Promise.race返回的仍然是一个Promise，它的状态与第一个完成的Promise的状态相同；
// 如果传入的参数是不可迭代的，那么将会抛出错误。

Promise.ra_ce = function(promises) {
    promises = Array.from(promises);
    return new Promise((resolve, reject) => {
        if(promises.length===0) {
            return;
        } else {
            for(let i=0; i<promises.length; i++) {
                Promise.resolve(promises[i]).then(data => {
                    resolve(data);
                    return;
                }, err => {
                    reject(err);
                    return;
                })
            }
        }
    })
}
