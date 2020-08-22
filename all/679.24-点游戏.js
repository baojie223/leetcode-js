/*
 * @lc app=leetcode.cn id=679 lang=javascript
 *
 * [679] 24 点游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const EPSILON = 1e-6
var judgePoint24 = function (nums) {
  return backtrack(nums)
}

function backtrack(nums, path = '') {
  if (nums.length === 1) {
    return Math.abs(nums[0] - 24) < EPSILON
  }
  const n = nums.length
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue
      const t = [...nums]
      const a = nums[i]
      const b = nums[j]
      nums[i] = -1
      nums[j] = -1
      nums = nums.filter((num) => num !== -1)
      const bool =
        backtrack([...nums, a - b], `${path} ${a} - ${b}`) ||
        backtrack([...nums, a + b], `${path} ${a} + ${b}`) ||
        backtrack([...nums, a * b], `${path} ${a} * ${b}`) ||
        backtrack([...nums, a / b], `${path} ${a} / ${b}`)
      if (bool) return true
      nums = t
    }
  }
  return false
}

function isInt(n) {
  return Math.floor(n) === n
}
// @lc code=end

judgePoint24([8, 4, 7, 1])
