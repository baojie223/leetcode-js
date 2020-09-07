/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const dict = {}
  for (let num of nums) {
    if (!dict[num]) dict[num] = 0
    dict[num]++
  }
  const map = []
  for (let num in dict) {
    map.push({ num, count: dict[num] })
  }
  map.sort((a, b) => b.count - a.count)
  const ans = []
  for (let { num } of map) {
    ans.push(Number(num))
    k--
    if (k === 0) break
  }
  return ans
}
// @lc code=end

topKFrequent([4, 1, -1, 2, -1, 2, 3], 2)
