/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  const len = m > n ? n : m
  let temp = []
  let nums
  let i = 0
  let j = 0
  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      temp.push(nums1[i])
      i++
    }
    if (nums1[i] > nums2[j]) {
      temp.push(nums2[j])
      j++
    }
    if (nums1[i] === nums2[j]) {
      temp.push(nums1[i])
      temp.push(nums2[j])
      i++
      j++
    }
  }
  if (i === m) {
    temp = temp.concat(nums2.slice(j))
  }
  if (j === n) {
    temp = temp.concat(nums1.slice(i))
  }
  temp = temp.slice(0, m + n)
  for (let i = 0; i < temp.length; i++) {
    nums1[i] = temp[i]
  }
  return
}
// @lc code=end
