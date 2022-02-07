/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// dp[amount] = min(dp[amount - coin1], dp[amount - coin2], ..., dp[amount - coinN]) + 1
// dp[coin1] = 1, ..., dp[coinN] = 1
// dp[amount < min(coin1, ..., coinN)] -1
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(amount + 1)
  dp[0] = 0
  for (let i = 0; i <= amount + 1; i++) {
    for (let coin of coins) {
      if (i < coin) {
        continue
      }
      dp[i] = Math.min(dp[i - coin] + 1, dp[i])
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount]
  // dp[amount] = min(dp[amount - coin1], dp[amount - coin2], dp[amount - coin3]...)
  // const memo = new Map()
  // function dp(n) {
  //   if (memo.has(n)) return memo.get(n)
  //   if (n === 0) return 0
  //   if (n < 0) return -1
  //   let res = Infinity
  //   for (let coin of coins) {
  //     subproblem = dp(n - coin)
  //     if (subproblem === -1) continue
  //     res = Math.min(res, subproblem + 1)
  //   }
  //   res === Infinity ? memo.set(n, -1) : memo.set(n, res)
  //   return memo.get(n)
  // }
  // return dp(amount)

  // const dp = Array(amount + 1).fill(amount + 1)
  // dp[0] = 0
  // for (let i = 0; i < dp.length; i++) {
  //   for (let coin of coins) {
  //     if (i < coin) continue
  //     dp[i] = Math.min(dp[i], dp[i - coin] + 1)
  //   }
  // }
  // return dp[amount] === amount + 1 ? -1 : dp[amount]
}
// @lc code=end

coinChange([2], 3)
