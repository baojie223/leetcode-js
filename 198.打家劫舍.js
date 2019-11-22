/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const len = nums.length
  if (len === 1) return nums[0]
  if (len === 2) return nums[0] > nums[1] ? nums[0] : nums[1]
  function findMax(a, b) {
    return a > b ? a : b
  }
  const dp = []
  let max = 0
  dp[0] = nums[0]
  dp[1] = findMax(nums[0], nums[1])
  for (let i = 2; i < nums.length; i++) {
    dp[i] = findMax(dp[i - 1], dp[i - 2] + nums[i])
    if (dp[i] > max) {
      max = dp[i]
    }
  }
  return max
}
// @lc code=end
