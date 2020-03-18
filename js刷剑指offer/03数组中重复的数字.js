// 03 数组中重复的数字
// 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

// 示例 1：

// 输入：
// [2, 3, 1, 0, 2, 5, 3]
// 输出：2 或 3 

// 方法一：利用map，把数组中的数放进map里，如果map中已经存在，就返回该值
var findRepeatNumber = function(nums) {
    var map = new Map();
    for(let i of nums){
        if(map.get(i) === undefined){
            map.set(i,1);
        }else{
            return i
        }
    }
};

// 方法二：先排序，然后遍历数组，找到重复的值
var findRepeatNumber = function(nums){
    var newNums = nums.sort();
    for(let i=0; i<newNums.length; i++){
        if(newNums[i] === newNums[i+1]){
            return newNums[i];
        }
    }
}

// 方法三：
// 让对应索引的数到对应的位置，比如第一个数为2，就把它放到索引为2的地方
// 相当于把数放进对应的桶
var findRepeatNumber = function(nums){
    for(let i=0; i<nums.length; i++){
        while(i !== nums[i]){
            if(nums[i] == nums[nums[i]]){
                return nums[i];
            }else{
                var temp = nums[i];
                nums[i] = nums[temp];
                nums[temp] = temp;
            }

        }
    }
    // return -1;
}