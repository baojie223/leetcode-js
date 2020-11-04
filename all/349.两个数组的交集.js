/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const set = new Set(nums1),
    set2 = new Set(nums2),
    ans = []
  for (let num of set2) {
    if (set.has(num)) ans.push(num)
  }
  return ans

  // 卑微解法
  // const map1 = {},
  //   map2 = {}
  // for (let num1 of nums1) {
  //   if (typeof map1[num1] === 'undefined') map1[num1] = 0
  //   map1[num1]++
  // }
  // for (let num2 of nums2) {
  //   if (typeof map2[num2] === 'undefined') map2[num2] = 0
  //   map2[num2]++
  // }
  // const ans = []
  // for (let key in map1) {
  //   if (map2[key]) ans.push(key)
  // }
  // return ans
}
// @lc code=end
