/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  const dp = Array(prices.length + 1)
    .fill('')
    .map(() =>
      Array(k)
        .fill('')
        .map(() => [0, 1])
    )
  for (let i = 1; i < prices.length + 1; i++) {
    for (let j = 0; j < k; j++) {
      dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i])
      dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i])
    }
  }
  return dp[prices.length][]
}
// @lc code=end
