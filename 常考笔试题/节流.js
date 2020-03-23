// 使用时间戳
// 当触发事件的时候，我们取出当前的时间戳，然后减去之前的时间戳(最一开始值设为 0 )
// 如果大于设置的时间周期，就执行函数，然后更新时间戳为当前的时间戳，
// 如果小于，就不执行。
function throttle(func,wait){
    return function(){
        var context = this;
        var args = arguments;
        var previous = 0;
        var now = +new Date();
        if(now - previous > wait){
            func.apply(context,args);
            previous = now;
        }
    }
}

// 设置定时器
function throttle(func,wait){
    var timeout;
    return function(){
        var context = this;
        var args = arguments;
        if(!timeout){
          timeout = setTimeout(function(){
              timeout = null;
            func.apply(context,args)
        },wait);  
        }
        
    }
}