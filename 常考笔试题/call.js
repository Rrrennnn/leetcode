// 模拟call的实现
// call() 方法在使用一个指定的 this 值和若干个指定的参数值的前提下调用某个函数或方法
// call第一个参数改变this的指向（可以传null）
// call()方法可以传入不定长的参数
// call()方法有返回值

// 模拟思路：
// 将函数设为对象的属性
// 执行该函数
// 删除该函数
Function.prototype.call2 = function (context) {
    // 将函数设为对象的属性，改变this指向（传null的时候，this指向window）
    context = context || window;
    context.fn = this;
    // 传参并执行函数，用一个数组来接收不定长参数
    var args = [];
    for(var i = 1; i < arguments.length; i ++){
        args.push('arguments['+i+']');
    }
    var result = eval('context.fn(' + args + ')');
    //删除该函数
    delete context.fn;
    return result;
}

// 测试一下
var value = 2;

var obj = {
    value: 1
}

function bar(name, age) {
    console.log(this.value);
    return {
        value: this.value,
        name: name,
        age: age
    }
}

bar.call2(null); // 2

// console.log(bar.call2(obj, 'kevin', 18));
// // 1
// // Object {
// //    value: 1,
// //    name: 'kevin',
// //    age: 18
// // }