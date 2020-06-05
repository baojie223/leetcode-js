/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = 0,
    right = nums.length - 1
  let leftBorder = 0,
    rightBorder = 0
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2)
    if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] === target) {
      right = mid - 1
    }
  }
  if (left >= nums.length || nums[left] !== target) {
    leftBorder = -1
  } else {
    leftBorder = left
  }

  left = 0
  right = nums.length - 1
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2)
    if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] === target) {
      left = mid + 1
    }
  }
  if (right < 0 || nums[right] !== target) {
    rightBorder = -1
  } else {
    rightBorder = right
  }

  return [leftBorder, rightBorder]
}
// @lc code=end

searchRange([5, 7, 7, 8, 8, 10], 8)
