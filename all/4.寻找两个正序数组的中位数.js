/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // 找第k小的数字
  const m = nums1.length,
    n = nums2.length
  const sortedArray = []
  let i = 0,
    j = 0,
    k = Math.floor((m + n) / 2)
  while (i + j <= k && i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      sortedArray.push(nums1[i++])
    } else {
      sortedArray.push(nums2[j++])
    }
  }
  while (i < m && i + j <= k) {
    sortedArray.push(nums1[i++])
  }
  while (j < n && i + j <= k) {
    sortedArray.push(nums2[j++])
  }
  if ((m + n) % 2 === 0) {
    return (sortedArray[k - 1] + sortedArray[k]) / 2
  } else {
    return sortedArray[k]
  }
}

// @lc code=end

findMedianSortedArrays([], [1])
