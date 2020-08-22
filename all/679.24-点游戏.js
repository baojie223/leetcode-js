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
var judgePoint24 = function (nums) {
  return backtrack(nums)
}

function backtrack(nums, current) {
  if (!isInt(current)) return false
  if (nums.length === 0) {
    return current === 24
  }
  nums.push(current)
  const n = nums.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const [b] = nums.splice(j, 1)
      const [a] = nums.splice(i, 1)
      const bool = backtrack(nums, a + b) || backtrack(nums, a * b) || backtrack(nums, a / b) || backtrack(nums, b / a)
      if (bool) return true
      nums.splice(i, 0, a)
      nums.splice(j, 0, b)
    }
  }
  nums.pop()
  return false
}

function isInt(n) {
  return Math.floor(n) === n
}
// @lc code=end

judgePoint24([4, 1, 8, 7])
