/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 就是剪绳子
var integerBreak = function (n) {
  // 贪心算法
  // if (n <= 3) return n - 1
  // const count = Math.floor(n / 3), remainder = n % 3
  // if (remainder === 0) {
  //   return 3 ** count
  // } else if (remainder === 1) {
  //   return 3 ** (count - 1) * 4
  // } else if (remainder === 2) {
  //   return 3 ** count * 2
  // }

  // 动态规划, dp[n] = max(dp[1]dp[n - 1], dp[2][dp[n - 2], ..., dp[n - 1]dp[1])
  if (n <= 3) return n - 1
  const dp = new Array(n + 1).fill(1)
  dp[2] = 2
  dp[3] = 3
  for (let i = 4; i <= n; i++) {
    for (let j = 1; j <= i - 1; j++) {
      dp[i] = Math.max(dp[i], dp[j] * dp[i - j])
    }
  }
  return dp[n]
}
// @lc code=end
