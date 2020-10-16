/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  A.sort((a, b) => Math.abs(a) - Math.abs(b))
  return A.map(num => num * num)
}
// @lc code=end
