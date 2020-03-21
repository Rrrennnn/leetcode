// 求两个数的最大公约数
// 辗转相除法
// 用大的数对小的数取余，再用小的数对取余后的值取余，一直递归，直到余数为零

function getMaxCommonDivisor(a,b){
    if(b === 0) return a;
    return getMaxCommonDivisor(b,a%b)
}

console.log(getMaxCommonDivisor(30,50));
console.log(getMaxCommonDivisor(48,100));