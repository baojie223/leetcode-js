/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const dp = Array(prices.length)
    .fill('')
    .map(() => [0, 0])
  for (let i = 0; i < prices.length; i++) {
    if (i === 0) {
      dp[i][0] = 0
      dp[i][1] = -prices[i]
      continue
    }
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
  }
  return prices.length > 0 ? dp[prices.length - 1][0] : 0
}
// @lc code=end

maxProfit([])
