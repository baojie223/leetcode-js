/*
 * @lc app=leetcode.cn id=632 lang=javascript
 *
 * [632] 最小区间
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
// 滑动窗口, 当窗口不满足条件时扩张, 满足条件时就收缩, 并且每次扩张和收缩的时候都要改变状态
var smallestRange = function (nums) {
  const counts = new Array(nums.length).fill(0),
    allNums = []

  for (let i = 0; i < nums.length; i++) {
    for (let num of nums[i]) {
      allNums.push({ index: i, val: num })
    }
  }
  allNums.sort((a, b) => a.val - b.val)

  let i = 0,
    j = 0
  let left = allNums[0].val,
    right = allNums[allNums.length - 1].val
  let count = 0
  while (j < allNums.length) {
    const currIndex = allNums[j].index
    if (counts[currIndex] === 0) count++
    counts[currIndex]++
    while (count === nums.length && i <= j) {
      if (allNums[j].val - allNums[i].val < right - left) {
        left = allNums[i].val
        right = allNums[j].val
      }
      const currIndex = allNums[i].index
      counts[currIndex]--
      if (counts[currIndex] === 0) count--
      i++
    }
    j++
  }

  return [left, right]
}
// @lc code=end

smallestRange([
  [4, 10, 15, 24, 26],
  [0, 9, 12, 20],
  [5, 18, 22, 30],
])
// [20, 24]
