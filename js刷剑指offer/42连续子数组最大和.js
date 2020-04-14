// 输入一个整型数组，数组里有正数也有负数。数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

// 要求时间复杂度为O(n)。

// 示例1:

// 输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

// 方法一：暴力枚举
var maxSubArray = function(nums) {
    var max = -Number.MAX_VALUE;
    for(let i=0; i<nums.length; i++){
         var sum = 0;
        for(let j=i; j<nums.length; j++){
                sum += nums[j];
                max = max > sum ? max : sum 
        }
    }
    return max;
};

// 方法二：动态规划
var maxSubArray = function(nums){
    let max = -Infinity;
    nums.reduce((pre,cur) => {
        if(pre > 0){
            pre += cur; //连续子数组的和大于0，对求最大和起正向作用，就加上他
        }else{
            pre = cur;  //连续子数组的和小于0，加上他会越来越小，就不要她了，直接从当前值重新开始
        }
        max = max > pre ? max : pre;
        return pre;
    },0)
    return max;
}