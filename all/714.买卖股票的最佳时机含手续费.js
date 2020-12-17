/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
// DP
var maxProfit = function (prices, fee) {
  // 保守做法, 空间O(n2)
  // const n = prices.length
  // const dp = [new Array(n), new Array(n)]
  // dp[0][0] = 0
  // dp[1][0] = -prices[0]
  // for (let i = 1; i < n; i++) {
  //   dp[0][i] = Math.max(dp[0][i - 1], dp[1][i - 1] + prices[i] - fee)
  //   dp[1][i] = Math.max(dp[0][i - 1] - prices[i], dp[1][i - 1])
  // }
  // return Math.max(dp[0][n - 1], dp[1][n - 1])

  // 降空间为O(1)
  const n = prices.length
  let dp0 = 0,
    dp1 = -prices[0]
  for (let i = 1; i < n; i++) {
    dp0 = Math.max(dp0, dp1 + prices[i] - fee)
    dp1 = Math.max(dp0 - prices[i], dp1)
  }
  return Math.max(dp0, dp1)
}
// @lc code=end
