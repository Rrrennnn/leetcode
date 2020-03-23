// 实现indexOf方法
// indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置
function findIndex(array,val){
    if(!Array.isArray(array)) return;
    for(let i=0; i<array.length; i++){
        if(array[i] === val){
            return i;
        }
    }
    return -1;
}