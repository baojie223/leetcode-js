/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0
  for (let j = 0; j < nums.length; j++) {
    if (i < 2 || nums[j] > nums[i - 2]) nums[i++] = nums[j]
  }
  return i
}
// @lc code=end

removeDuplicates([1, 1, 1, 2, 2, 3])
