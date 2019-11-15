/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const dp = []
  const len = triangle.length
  dp[len - 1] = triangle[len - 1]
  const min = (a, b) => {
    return a >= b ? b : a
  }
  for (let i = len - 2; i >= 0; i--) {
    dp[i] = []
    for (let j = 0; j < triangle[i].length; j++) {
      dp[i][j] = min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j]
    }
  }
  return dp[0][0]
}
// @lc code=end
