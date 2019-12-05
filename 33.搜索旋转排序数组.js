/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  let mid

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      // nums = nums.slice(i + 1).concat(nums.slice(0, i + 1))
      left = i + 1
      right = i + nums.length
      break
    }
  }

  while (left <= right) {
    mid = Math.floor((right + left) / 2)
    if (nums[mid % nums.length] === target) {
      return mid % nums.length
    }
    if (nums[mid % nums.length] < target) {
      left = mid + 1
      continue
    }
    if (nums[mid % nums.length] > target) {
      right = mid - 1
      continue
    }
  }
  return -1
}
// @lc code=end
