/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 *
 * https://leetcode-cn.com/problems/unique-paths-ii/description/
 *
 * algorithms
 * Medium (32.56%)
 * Likes:    265
 * Dislikes: 0
 * Total Accepted:    53K
 * Total Submissions: 161.8K
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
 *
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
 *
 * 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
 *
 *
 *
 * 网格中的障碍物和空位置分别用 1 和 0 来表示。
 *
 * 说明：m 和 n 的值均不超过 100。
 *
 * 示例 1:
 *
 * 输入:
 * [
 * [0,0,0],
 * [0,1,0],
 * [0,0,0]
 * ]
 * 输出: 2
 * 解释:
 * 3x3 网格的正中间有一个障碍物。
 * 从左上角到右下角一共有 2 条不同的路径：
 * 1. 向右 -> 向右 -> 向下 -> 向下
 * 2. 向下 -> 向下 -> 向右 -> 向右
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const r = obstacleGrid.length
  const c = obstacleGrid[0].length
  const dp = new Array(r).fill(new Array(c).fill(0))
  // dp[0][0] = obstacleGrid[0][0] === 0 ? 1 : 0
  // for (let i = 1; i < r; i++) {
  //   dp[i][0] = obstacleGrid[i][0] === 0 && obstacleGrid[i - 1][0] === 0 ? 1 : 0
  // }
  // for (let i = 1; i < c; i++) {
  //   dp[0][i] = obstacleGrid[0][i] === 0 && obstacleGrid[0][i - 1] === 0 ? 1 : 0
  // }
  // for (let i = 1; i < r; i++) {
  //   for (let j = 1; j < c; j++) {
  //     if (obstacleGrid[i][j] === 1) {
  //       dp[i][j] = 0
  //       continue
  //     }
  //     dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
  //   }
  // }
  for (let i = r - 1; i >= 0; i--) {
    for(let j = c - 1; j >= 0; j--) {
      if (obstacleGrid[i][j] === 0) {
        if (i === r - 1) {
          dp[r - 1][j] = dp[r - 1][j + 1]
          continue
        }
        if (j === c - 1) {
          dp[i][c - 1] = dp[i + 1][c - 1]
          continue
        }
        dp[i][j] = dp[i + 1][j] + dp[i][j + 1]
      } else {
        dp[i][j] = 0
      }
    }
  }
  return dp[0][0]
}
// @lc code=end
