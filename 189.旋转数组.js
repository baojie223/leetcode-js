/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

  // 方法一
  // let i = k
  // while (i > 0) {
  //   nums.unshift(nums.pop())
  //   i--
  // }

  // 方法二
  let t
  if (k > nums.length) {
    t = k % nums.length
  } else {
    t = k
  }
  const reverse = (arr, left, right) => {
    const len = right - left
    for (let i = 0; i < len / 2; i++) {
      const tmp = arr[i + left]
      arr[i + left] = arr[len + left - 1 - i]
      arr[len + left - 1 - i] = tmp
    }
  }
  nums.reverse()
  reverse(nums, 0, t)
  reverse(nums, t, nums.length)
};
// @lc code=end

