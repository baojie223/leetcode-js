/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (!obstacleGrid[0]) return 0;
  const m = obstacleGrid[0].length;
  const n = obstacleGrid.length;
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      if (obstacleGrid[0][0] === 1) {
        obstacleGrid[0][0] = 0;
      } else {
        obstacleGrid[0][0] = 1;
      }
      continue;
    }
    if (obstacleGrid[i][0] !== 1) {
      obstacleGrid[i][0] = obstacleGrid[i - 1][0];
    } else {
      obstacleGrid[i][0] = 0;
    }
  }
  for (let i = 0; i < m; i++) {
    if (i === 0) {
      continue;
    }
    if (obstacleGrid[0][i] !== 1) {
      obstacleGrid[0][i] = obstacleGrid[0][i - 1];
    } else {
      obstacleGrid[0][i] = 0;
    }
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (obstacleGrid[i][j] !== 1) {
        obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
      } else {
        obstacleGrid[i][j] = 0;
      }
    }
  }
  return obstacleGrid[n - 1][m - 1];
};
// @lc code=end
