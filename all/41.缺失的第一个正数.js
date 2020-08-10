/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const n = nums.length
  if (n === 0) return 1
  let i = 0
  while (i < n) {
    const curr = nums[i]
    if (curr !== i + 1 && curr >= 1 && curr <= n && nums[i] !== nums[curr - 1]) {
      nums[i] = nums[curr - 1]
      nums[curr - 1] = curr
      continue
    }
    i++
  }
  let j = 0
  while (j < n) {
    if (nums[j] !== j + 1) return j + 1
    j++
  }
  return nums[j - 1] + 1
}
// @lc code=end

firstMissingPositive([1, 1]) // 2