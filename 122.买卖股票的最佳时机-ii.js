/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // let total = 0
  // for (let i = 1; i < prices.length; i++) {
  //   if (prices[i] > prices[i - 1]) {
  //     total += prices[i] - prices[i - 1]
  //   }
  // }
  // return total
  const len = prices.length
  const dp = Array(len)
    .fill('')
    .map(() => [])
  for (let i = 0; i < len; i++) {
    if (i === 0) {
      dp[i][0] = 0
      dp[i][1] = -prices[i]
      continue
    }
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
  }
  return len > 0 ? dp[len - 1][0] : 0
}
// @lc code=end
