// 面试题30. 包含min函数的栈
// 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。

// 示例:

// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.min();   --> 返回 -3.
// minStack.pop();
// minStack.top();      --> 返回 0.
// minStack.min();   --> 返回 -2.

// 解题思路：
// push和pop时间复杂度都是o(1)，min时间复杂度为o(n)
// 设置一个辅助栈B，存放栈A中最小的数

var MinStack = function() {
    this.stack = [];
    this.minStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    const length = this.minStack.length;
    if(!length || x <= this.minStack[length-1]){
        this.minStack.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack[this.stack.length-1] === this.minStack[this.minStack.length-1]){
        this.minStack.pop();
    }
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.stack.length){
        return this.stack[this.stack.length - 1];
    }else{
        return null
    }
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    if(this.minStack.length){
        return this.minStack[this.minStack.length-1];
    }else{
        return null
    }
};