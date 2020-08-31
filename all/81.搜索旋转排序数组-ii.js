/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  const n = nums.length
  if (!n) return false
  let s = 0
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      s = i
      break
    }
  }
  return divide(nums, 0, s, target) || divide(nums, s + 1, n - 1, target)
}

function divide(nums, lo, hi, target) {
  if (lo > hi) return false
  const mid = Math.floor(lo + (hi - lo) / 2)
  if (nums[mid] === target) return true
  else if (nums[mid] < target) return divide(nums, mid + 1, hi, target)
  else if (nums[mid] > target) return divide(nums, lo, mid - 1, target)
}
// @lc code=end

search([1], 0)
