/*
 * @lc app=leetcode.cn id=329 lang=javascript
 *
 * [329] 矩阵中的最长递增路径
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  if (!matrix.length) return 0
  const m = matrix.length,
    n = matrix[0].length
  let max = 0
  const visited = Array(m)
    .fill(null)
    .map(() =>
      Array(n)
        .fill(null)
        .map(() => [])
    )
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      max = Math.max(max, check(matrix, i, j, m, n, 1, visited))
    }
  }
  return max
}

function check(matrix, i, j, m, n, count = 1, visited) {
  if (i < 0 || i >= m || j < 0 || j >= n) return count
  if (visited[i][j][count]) return visited[i][j][count]
  const curr = matrix[i][j]
  let max = count
  if (i - 1 >= 0 && matrix[i - 1][j] > curr) {
    matrix[i][j] = -1
    max = Math.max(max, check(matrix, i - 1, j, m, n, count + 1, visited))
    matrix[i][j] = curr
  }
  if (i + 1 < m && matrix[i + 1][j] > curr) {
    matrix[i][j] = -1
    max = Math.max(max, check(matrix, i + 1, j, m, n, count + 1, visited))
    matrix[i][j] = curr
  }
  if (j - 1 >= 0 && matrix[i][j - 1] > curr) {
    matrix[i][j] = -1
    max = Math.max(max, check(matrix, i, j - 1, m, n, count + 1, visited))
    matrix[i][j] = curr
  }
  if (j + 1 < n && matrix[i][j + 1] > curr) {
    matrix[i][j] = -1
    max = Math.max(max, check(matrix, i, j + 1, m, n, count + 1, visited))
    matrix[i][j] = curr
  }
  visited[i][j][count] = max
  return max
}
// @lc code=end

longestIncreasingPath([
  [9, 9, 4],
  [6, 6, 8],
  [2, 1, 1],
])
