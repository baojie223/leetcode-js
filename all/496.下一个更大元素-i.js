/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const result = []
  for (let i = 0; i < nums1.length; i++) {
    for (let j = nums2.length - 1; j >= 0; j--) {
      if (nums1[i] === nums2[j]) {
        let k = j + 1
        while (k < nums2.length) {
          if (nums2[j] < nums2[k]) {
            result.push(nums2[k])
            break
          }
          k++
        }
        if (k !== nums2.length) {
          break
        }
      }
    }
    if (result.length === i) {
      result.push(-1)
    }
  }
  return result
}
// @lc code=end
