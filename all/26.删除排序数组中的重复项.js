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
  // solution no.1
  // const len = nums.length
  // let flag = false
  // for (let i = 0; i < len; i++) {
  //   for (let j = len; j < nums.length; j++) {
  //     if (nums[i] === nums[j]) {
  //       nums[i] = 0
  //       flag = true
  //       break
  //     }
  //   }
  //   if (!flag) {
  //     nums.push(nums[i])
  //     nums[i] = 0
  //   } else {
  //     flag = false
  //   }
  // }
  // nums.splice(0, len)
  // return nums.length

  // solution no.2 快慢指针
  // let i = 0
  // let j = 1
  // while (j < nums.length) {
  //   if (nums[i] !== nums[j]) {
  //     nums[i + 1] = nums[j]
  //     i++
  //     j++
  //   } else {
  //     j++
  //   }
  //   j++
  // }
  // return i + 1

  let i = 0
  for (const n of nums) {
    if (i < 1 || n > nums[i - 1]) nums[i++] = n
  }
  return i
};

