/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    if (nums[i] === val) {
      nums[i] = 0
    } else {
      nums.push(nums[i])
      nums[i] = 0
    }
  }
  nums.splice(0, len)
  return nums.length
};

