// 模拟bind的实现
// bind() 方法会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数。
// 1.返回一个函数
// 2.可以传入参数
//   传参时注意：函数可以只传一个参数，然后在执行返回的函数时再继续传参
// 3.bind函数可以用new来创建对象，相当于把原函数当作一个构造器，即当bind返回的函数作为构造函数的时候，bind指定的this失效了
// 4.调用bind的不是函数时要报错

Function.prototype.bind2 = function(context){
    if(typeof this !== "function"){
        throw new Error("")
    }
    var self = this;
    var args = Array.prototype.slice.call(arguments,1);
    var fNOP = function(){}
    var fBound =  function(){
        var bindArgs = Array.prototype.slice.call(arguments);
        self.apply(self instanceof fNOP ? this : context,args.concat(bindArgs));
    }
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}


