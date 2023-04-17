/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length
  const ans = new Array(n).fill(1)
  for (let i = 1; i < n; i++) {
    ans[i] = ans[i - 1] * nums[i - 1]
  }
  let rightProduct = 1
  for (let i = n - 2; i >= 0; i--) {
    rightProduct = rightProduct * nums[i + 1]
    ans[i] = ans[i] * rightProduct
  }
  return ans
}
// @lc code=end
