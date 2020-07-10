/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 动态规划，dp[i][1] = Math.max(dp[i - 2][0] - prices[i], dp[i - 1][1]), dp[i][0] = Math.max(dp[i - 1][1] + prices[i], dp[i - 1][0])
  // 起始状态：dp[0][1] = -prices[0], dp[0][0] = 0, dp[1][1] = Math.max(-prices[1], -prices[0]), dp[1][0] = Math.max(-prices[0] + prices[1], 0)

  // if (!prices.length) return 0;
  // const dp = [];
  // for (let i = 0; i < prices.length; i++) {
  //   if (!dp[i]) dp[i] = [];
  //   if (i === 0) {
  //     dp[0][1] = -prices[0];
  //     dp[0][0] = 0;
  //     continue;
  //   }
  //   if (i === 1) {
  //     dp[1][1] = Math.max(-prices[1], -prices[0]);
  //     dp[1][0] = Math.max(-prices[0] + prices[1], 0);
  //     continue;
  //   }
  //   dp[i][1] = Math.max(dp[i - 2][0] - prices[i], dp[i - 1][1]);
  //   dp[i][0] = Math.max(dp[i - 1][1] + prices[i], dp[i - 1][0]);
  // }
  // return dp[prices.length - 1][0];

  // 优化空间复杂度，由数组变为常量
  let dp_i_1 = -Infinity, dp_i_0 = 0, dp_pre_0 = 0
  for (let i = 0; i < prices.length; i++) {
    const temp = dp_i_0
    dp_i_0 = Math.max(dp_i_1 + prices[i], dp_i_0)
    dp_i_1 = Math.max(dp_pre_0 - prices[i], dp_i_1)
    dp_pre_0 = temp
  }
  return dp_i_0
};
// @lc code=end
