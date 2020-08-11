/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length
  for (let i = 0; i < (n >> 1); i++) {
    for (let j = i; j < n - 1 - i; j++) {
      swap(matrix, i, j, j, n - 1 - i)
      swap(matrix, i, j, n - 1 - i, n - 1 - j)
      swap(matrix, i, j, n - 1 - j, i)
    }
  }
}

function swap(a, i, j, k, l) {
  const t = a[i][j]
  a[i][j] = a[k][l]
  a[k][l] = t
}
// @lc code=end
