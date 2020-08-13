/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const n = nums.length
  let k = 0
  for (let i = 0; i < n; i++) {
    if (k < i) return false
    k = Math.max(k, nums[i] + i)
  }
  return true
}

// dfs 超时
// var canJump = function (nums) {
//   return dfs(nums, 0)
// }

// function dfs(nums, i) {
//   if (i >= nums.length - 1) return true
//   for (let j = nums[i]; j >= 1; j--) {
//     if (dfs(nums, i + j)) return true
//   }
//   return false
// }
// @lc code=end
