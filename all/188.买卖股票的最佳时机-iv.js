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
  const n = prices.length
  if (k > n / 2) return maxProfit(Math.floor(n / 2), prices)
  let dp = Array(n)
    .fill('')
    .map(() =>
      Array(k + 1)
        .fill('')
        .map(() => [])
    )
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= k; j++) {
      if (i === 0) {
        dp[i][j][0] = 0
        dp[i][j][1] = -Infinity
        continue
      }
      if (j === 0) {
        dp[i][j][0] = 0
        dp[i][j][1] = -Infinity
        continue
      }
      dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i])
      dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i])
    }
  }
  return dp[n - 1][k][0]
}
// @lc code=end

maxProfit(2, [2, 4, 1])
