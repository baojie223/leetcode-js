/*
 * @lc app=leetcode.cn id=384 lang=javascript
 *
 * [384] 打乱数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.original = nums
  this.nums = nums.slice()
}

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  this.nums = this.original.slice()
  return this.nums
}

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const n = this.nums.length
  for (let i = 0; i < n; ++i) {
    const j = Math.floor(Math.random() * (n - i)) + i
    const tmp = this.nums[i]
    this.nums[i] = this.nums[j]
    this.nums[j] = tmp
  }
  return this.nums
  // const result = []
  // for (let i = 0; i < this.nums.length; i++) {
  //   result.splice(Math.floor(Math.random() * (result.length + 1)), 0, this.nums[i])
  // }
  // return result
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end
