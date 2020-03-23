// js 实现一个函数，完成超过范围的两个大整数相加功能
function bigNumberAdd(a,b){
    var res = ""; //用字符串接收结果
    var carry;  //保存进位结果
    //把字符串转换成数组
    a = a.split("");
    b = b.split("");
    // 当数组的长度都变为0，并且最终不再进位时，结束循环
    while(a.length || b.length || carry){
        carry += a.pop() + b.pop();
        res += carry % 10;
        // 判断是否需要进位，true 和 false 的值在加法中会被转换为 1 和 0
        carry = carry > 9;
    }
    return res;
}