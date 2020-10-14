/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 哈希表, 时间 O(n), 空间 O(n)
  // const map = {}
  // for (let num of nums) {
  //   if (typeof map[num] === 'undefined') map[num] = 0
  //   map[num]++
  // }
  // for (let key in map) {
  //   if (map[key] === 1) return Number(key)
  // }

  // 位运算
  return nums.reduce((pre, cur) => pre ^ cur)
  // const n = nums.length
  // let ans = nums[0]
  // for (let i = 1; i < n; i++) {
  //   ans = ans ^ nums[i]
  // }
  // return ans
}
// @lc code=end
