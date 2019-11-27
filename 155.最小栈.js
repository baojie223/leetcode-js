/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = []
  this.length = 0
  this.min = void 0
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (typeof this.min === 'undefined') {
    this.min = x
  }
  this.stack.push(x)
  this.length++
  if (x < this.min) {
    this.min = x
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (!this.length) return
  const num = this.stack.pop()
  this.length--
  if (!this.length) {
    this.min = void 0
    return
  }
  if (num === this.min) {
    this.min = this.stack[0]
    for (let i = 0; i < this.length; i++) {
      if (this.stack[i] < this.min) {
        this.min = this.stack[i]
      }
    }
  }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
