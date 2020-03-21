// 求最小公倍数
// 两数相乘，然后除以他们的最大公约数

function getMinCommonMutiple(a, b) {
    return a * b / getMaxCommonDivisor(a, b);
}

function getMaxCommonDivisor(a, b) {
    if (b === 0) {
        return a;
    }
    return getMaxCommonDivisor(b, a % b)
}

console.log(getMinCommonMutiple(3,5));
console.log(getMinCommonMutiple(10,5));