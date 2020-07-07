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
var rob = function (nums) {
  // const len = nums.length
  // if (len === 1) return nums[0]
  // if (len === 2) return nums[0] > nums[1] ? nums[0] : nums[1]
  // function findMax(a, b) {
  //   return a > b ? a : b
  // }
  // const dp = []
  // let max = 0
  // dp[0] = nums[0]
  // dp[1] = findMax(nums[0], nums[1])
  // for (let i = 2; i < nums.length; i++) {
  //   dp[i] = findMax(dp[i - 1], dp[i - 2] + nums[i])
  //   if (dp[i] > max) {
  //     max = dp[i]
  //   }
  // }
  // return max

  // dp[i][01] = max(dp[i - 1][1], dp[i - 2][1] + nums[i])
  // dp[i][0] = dp[i - 1][1]
  // dp[i][1] = dp[i - 2][1] + nums[i]
  // dp[i] = max()
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  // const dp = []
  // dp[0] = nums[0]
  // dp[1] = Math.max(nums[0], nums[1])
  // for (let i = 2; i < nums.length; i++) {
  //   dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
  // }
  // return dp[nums.length - 1]
  let dp_i_0 = nums[0]
  let dp_i_1 = Math.max(nums[0], nums[1])
  for (let i = 2; i < nums.length; i++) {
    const temp = dp_i_1
    dp_i_1 = Math.max(dp_i_0 + nums[i], dp_i_1)
    dp_i_0 = temp
  }
  return dp_i_1
}
// @lc code=end

rob([1, 2])
