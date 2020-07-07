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
  // solution no.1
  // const len = nums.length
  // for (let i = 0; i < len; i++) {
  //   if (nums[i] === val) {
  //     nums[i] = 0
  //   } else {
  //     nums.push(nums[i])
  //     nums[i] = 0
  //   }
  // }
  // nums.splice(0, len)
  // return nums.length

  // solution no.2 双指针
  let i = 0
  let j = nums.length - 1
  while (i <= j) {
    if (nums[i] === val) {
      nums[i] = nums[j]
      nums.pop()
      j--
      continue
    }
    if (nums[j] === val) {
      nums.pop()
      j--
      continue
    }
    i++
  }
  return nums.length
}
