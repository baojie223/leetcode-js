/*
 * @lc app=leetcode.cn id=486 lang=javascript
 *
 * [486] 预测赢家
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function (nums) {
  const n = nums.length
  const memo = new Array(n).fill(null).map(() => new Array(n))
  return helper(nums, 0, n - 1, memo) >= 0
}

function helper(nums, i, j, memo) {
  if (memo[i][j] !== undefined) return memo[i][j]
  if (i === j) {
    memo[i][j] = nums[i]
    return memo[i][j]
  }
  const pickI = nums[i] - helper(nums, i + 1, j, memo)
  const pickJ = nums[j] - helper(nums, i, j - 1, memo)
  memo[i][j] = Math.max(pickI, pickJ)
  return memo[i][j]
}
// @lc code=end

PredictTheWinner([1, 5, 2])
