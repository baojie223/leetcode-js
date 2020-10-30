/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  if (!grid.length) return 0
  const m = grid.length,
    n = grid[0].length
  let sum = 0
  const isBoard = (i, j) => {
    if (i < 0 || i >= m || j < 0 || j >= n) return 1
    return grid[i][j] === 0 ? 1 : 0
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) continue
      sum = sum + isBoard(i - 1, j) + isBoard(i + 1, j) + isBoard(i, j - 1) + isBoard(i, j + 1)
    }
  }
  return sum
}
// @lc code=end

islandPerimeter([
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
])
