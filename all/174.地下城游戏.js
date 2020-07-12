/*
 * @lc app=leetcode.cn id=174 lang=javascript
 *
 * [174] 地下城游戏
 */

// @lc code=start
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  if (!dungeon.length) return 0;
  const rows = dungeon.length,
    cols = dungeon[0].length;
  const dp = Array(rows + 1)
    .fill('')
    .map(() => Array(cols + 1).fill(Infinity));
  dp[rows][cols - 1] = dp[rows - 1][cols] = 1
  for (let i = rows - 1; i >= 0; i--) {
    for (let j = cols - 1; j >= 0; j--) {
      const min = Math.min(dp[i + 1][j], dp[i][j + 1]);
      dp[i][j] = Math.max(min - dungeon[i][j], 1);
    }
  }
  return dp[0][0];
};
// @lc code=end
