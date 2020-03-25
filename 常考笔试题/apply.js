// 模拟apply()方法的实现

Function.prototype.apply2 = function(context,arr){
    context = context || window;
    context.fn = this;
    var result;
    if(!arr){
        result = context.fn()
    }else{
        var args = [];
        for(var i = 0; i < arr.length; i++){
            args.push('arr[' + i + ']')
        }
        result = eval('context.fn(' + args + ')')
    }
    delete context.fn;
    return result;
}

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

// bar.apply2(null); // 2

console.log(bar.apply2(obj, 'kevin', 18));
// 1
// Object {
//    value: 1,
//    name: 'kevin',
//    age: 18
// }