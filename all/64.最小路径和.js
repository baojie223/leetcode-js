/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  // 动态规划, 空间O(m * n)
  // const m = grid.length,
  //   n = grid[0].length
  // const dp = Array(m + 1)
  //   .fill('')
  //   .map(() => Array(n + 1).fill(Infinity))
  // dp[1][1] = grid[0][0]
  // for (let i = 1; i < m + 1; i++) {
  //   for (let j = 1; j < n + 1; j++) {
  //     if (i === 1 && j === 1) continue
  //     dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1]
  //   }
  // }
  // return dp[m][n]

  // 修改原数组, 空间O(1)
  const m = grid.length,
    n = grid[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        continue
      } else if (i === 0) {
        grid[0][j] = grid[0][j - 1] + grid[0][j]
      } else if (j === 0) {
        grid[i][0] = grid[i - 1][0] + grid[i][0]
      } else {
        grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j]
      }
    }
  }
  return grid[m - 1][n - 1]
}
// @lc code=end
