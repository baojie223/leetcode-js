/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const len = nums.length
  let flag = false
  for (let i = 0; i < len; i++) {
    for (let j = len; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        nums[i] = 0
        flag = true
        break
      }
    }
    if (!flag) {
      nums.push(nums[i])
      nums[i] = 0
    } else {
      flag = false
    }
  }
  nums.splice(0, len)
  return nums.length
};

