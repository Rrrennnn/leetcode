// 闭包实现倒计时
for(var i = 10; i > 0; i--){
    (function(i){
        setTimeout(() => {
        console.log(i);
    },(10-i)*1000)
    })(i)
}

