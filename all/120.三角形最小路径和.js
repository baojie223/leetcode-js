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
var minimumTotal = function (triangle) {
  // 动态规划，状态转移方程：dp[i][j] = min(dp[i - 1][j- 1], dp[i - 1][j]) + t[i][j]
  const rows = triangle.length;
  if (!rows) return 0;
  const dp = [];
  for (let i = 0; i < rows; i++) {
    if (!dp[i]) dp[i] = [];
    if (i === 0) {
      dp[0][0] = triangle[0][0];
      continue;
    }
    for (let j = 0; j <= i; j++) {
      if (j === 0) {
        dp[i][0] = dp[i - 1][0] + triangle[i][0];
        continue;
      }
      if (j === i) {
        dp[i][i] = dp[i - 1][i - 1] + triangle[i][i];
        continue;
      }
      dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
    }
  }

  return Math.min(...dp[rows - 1]);
};
// @lc code=end
minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]);
