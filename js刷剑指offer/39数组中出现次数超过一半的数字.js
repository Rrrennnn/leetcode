// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

// 示例 1:

// 输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]
// 输出: 2

// 方法一：
//     使用map记录数组中的值以及出现的次数
var majorityElement = function(nums) {
    // write code here
const len = nums.length 
if (len === 0) return 0

const map = new Map()
for (let i of nums) {
    if (map.get(i) === undefined) {
        map.set(i, 1)
    }else {
        map.set(i, map.get(i)+1)
    }
}
for (let item of map.entries()) {
    if (item[1] > Math.floor(len/2)) return item[0]
}
return 0
};

// 方法二：给数组排序，次数超过一半的话，那么数组中点索引对应的数一定是这个数
var majorityElement = function(nums){
    var newNums = nums.sort();
    return newNums[Math.floor(nums.length / 2)];
};

// 方法三：
