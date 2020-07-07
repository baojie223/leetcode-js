/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let left = 0
  let right = nums.length - 1
  let mid
  if (nums.length === 1) return 0
  while (left < right) {
    mid = Math.floor((left + right) / 2)
    if (nums[mid] < nums[mid + 1]) {
      if (mid + 1 === nums.length - 1) return nums.length - 1
      if (nums[mid + 1] > nums[mid + 2]) {
        return mid + 1
      } else {
        left = mid + 1
      }
      continue
    }
    if (nums[mid] > nums[mid + 1]) {
      if (mid === 0) return 0
      if (nums[mid - 1] < nums[mid]) {
        return mid
      } else {
        right = mid
      }
      continue
    }
  }
}
// @lc code=end
