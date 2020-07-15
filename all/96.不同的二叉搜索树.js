/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  // 动态规划状态转移方程：dp[i] = dp[0] * dp[i - 1] + dp[1] * dp[i - 2] + ... + dp[i - 1] * dp[0], dp[0] = 1, dp[1] = 1
  // 时间：O(n2), 空间：O(n)
  const dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = 0;
    for (let j = i; j >= 1; j--) {
      dp[i] += dp[i - j] * dp[j - 1];
    }
  }
  return dp[n];
};
// @lc code=end

numTrees(2);
