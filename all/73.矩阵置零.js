/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 把第一行第一列设为标志位, 空间O(1)
var setZeroes = function (matrix) {
  const m = matrix.length, n = matrix[0].length
  let row1 = false, col1 = false
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      row1 = true
      break
    }
  }
  for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0) {
      col1 = true
      break
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0
        matrix[0][j] = 0
      }
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0
      }
    }
  }
  if (row1) {
    for (let i = 0; i < m; i++) matrix[i][0] = 0
  }
  if (col1) {
    for (let j = 0; j < n; j++) matrix[0][j] = 0
  }
}

// 时间: O(m * n), 空间: O(m + n) ? 感觉应该也是O(1)
// const flag = Infinity
// var setZeroes = function (matrix) {
//   const m = matrix.length,
//     n = matrix[0].length
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (matrix[i][j] === flag) continue
//       if (matrix[i][j] === 0) mark(matrix, i, j, m, n)
//     }
//   }
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (matrix[i][j] === flag) matrix[i][j] = 0
//     }
//   }
// }

// function mark(matrix, row, col, m, n) {
//   let r = 0,
//     c = 0
//   if (matrix[row][col] === flag) return
//   matrix[row][col] = flag
//   while (r < m) {
//     if (matrix[r][col] === 0) {
//       mark(matrix, r, col, m, n)
//     } else {
//       matrix[r][col] = flag
//     }
//     r++
//   }
//   while (c < n) {
//     if (matrix[row][c] === 0) {
//       mark(matrix, row, c, m, n)
//     } else {
//       matrix[row][c] = flag
//     }
//     c++
//   }
// }
// @lc code=end

setZeroes([
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
])
