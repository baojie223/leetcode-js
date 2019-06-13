/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (nums.some(num => num === target)) {
    return nums.findIndex(num => num === target)
  } else {
    for (let i = 0; i < nums.length - 1; i ++) {
      if (nums[i] < target && nums[i + 1] > target) {
        return i + 1
      }
    }
    if (target < nums[0]) {
      return 0
    }
    if (target > nums[nums.length - 1]) {
      return nums.length
    }
  }
};

