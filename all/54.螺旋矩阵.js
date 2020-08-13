/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const ans = []
  if (!matrix.length) return ans
  let t = 0,
    b = matrix.length - 1,
    l = 0,
    r = matrix[0].length - 1
  while (true) {
    for (let i = l; i <= r; i++) ans.push(matrix[t][i])
    if (++t > b) break
    for (let i = t; i <= b; i++) ans.push(matrix[i][r])
    if (--r < l) break
    for (let i = r; i >= l; i--) ans.push(matrix[b][i])
    if (--b < t) break
    for (let i = b; i >= t; i--) ans.push(matrix[i][l])
    if (++l > r) break
  }
  return ans
}
// @lc code=end
spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
])
