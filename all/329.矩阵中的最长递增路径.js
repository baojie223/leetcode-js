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
  
  // max用来表示当前的最长递增路径长度
  let max = 0

  // 记忆化搜索的三维存储数组, 与下面的check函数对应
  const visited = Array(m)
    .fill(null)
    .map(() =>
      Array(n)
        .fill(null)
        .map(() => [])
    )

  // 遍历矩阵中所有元素, 求出一个最长的递增路径
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      max = Math.max(max, check(matrix, i, j, m, n, 1, visited))
    }
  }
  return max
}

// check函数, 其中count表示当前累计的路径长度,
// 返回从matrix[i][j]开始的最长的递增路径的长度
function check(matrix, i, j, m, n, count = 1, visited) {
  // 当 i, j 越界时, 返回目前这条路径的累计长度
  if (i < 0 || i >= m || j < 0 || j >= n) return count
  // 通过visited数组降低时间复杂度, 不加的话会超时
  if (visited[i][j][count]) return visited[i][j][count]
  const curr = matrix[i][j]
  let max = count
  // 对当前节点的上下左右分别进行回溯操作, 并且选择这4个方向中的最长路径,
  // 其中matrix[i][j] = -1代表该节点访问过了
  // count + 1 代表下一个节点的累计路径长度要加一
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

function max(a, b) {
  return a > b ? a : b
}
// @lc code=end

longestIncreasingPath([
  [9, 9, 4],
  [6, 6, 8],
  [2, 1, 1],
])
