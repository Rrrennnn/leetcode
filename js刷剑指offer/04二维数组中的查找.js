// 04 二维数组中的查找
// 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

// 示例:

// 现有矩阵 matrix 如下：

// [
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]
// 给定 target = 5，返回 true。

// 给定 target = 20，返回 false。

// 从二维数组的左下角出发
// 如果这个数比target大，说明这一排都比target大，那么就继续往上一排寻找
// 如果这个数比target小，就往这一排的后面寻找

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    var x = matrix.length - 1;
    var y = 0;
    while(x >= 0 && y < matrix[0].length){
        if(target < matrix[x][y]){
            x--;
        }else if(target > matrix[x][y]){
            y++;
        }else{
            return true;
        }
    }
    return false;
};