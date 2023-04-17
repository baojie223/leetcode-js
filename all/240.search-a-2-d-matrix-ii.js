/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] Search a 2D Matrix II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length
  const n = matrix[0].length
  let row = 0
  let col = n - 1
  while (row < m && col >= 0) {
    const num = matrix[row][col]
    if (target > num) {
      row++
    } else if (target < num) {
      col--
    } else {
      return true
    }
  }
  return false
}
// @lc code=end
