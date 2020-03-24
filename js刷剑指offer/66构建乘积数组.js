// 66 构建乘积数组
// 给定一个数组 A[0,1,…,n-1]，请构建一个数组 B[0,1,…,n-1]，其中 B 中的元素 B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]。不能使用除法。

// 示例:

// 输入: [1,2,3,4,5]
// 输出: [120,60,40,30,24]


// 思路：1.left：正向遍历A数组，累乘
//      2.right：反向遍历A数组，累乘
//      3.left * right 即为B数组

function constructArr(a) {
    var res = [];
    var left = 1;
    for (let i = 0; i < a.length; i++) {
        res[i] = left;
        left *= a[i];
    }
    var right = 1;
    for (let i = a.length - 1; i >= 0; i--) {
        res *= right;
        right *= a[i];
    }
    return res;
}