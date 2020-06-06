/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length
  let dp_i_10 = 0,
    dp_i_11 = -Infinity,
    dp_i_20 = 0,
    dp_i_21 = -Infinity
  for (let i = 0; i < n; i++) {
    dp_i_10 = Math.max(dp_i_10, dp_i_11 + prices[i])
    dp_i_11 = Math.max(dp_i_11, -prices[i])
    dp_i_20 = Math.max(dp_i_20, dp_i_21 + prices[i])
    dp_i_21 = Math.max(dp_i_21, dp_i_10 - prices[i])
  }
  return Math.max(dp_i_10, dp_i_20)
}
// @lc code=end
