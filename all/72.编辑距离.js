/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// 动态规划, 自底向上
// var minDistance = function (word1, word2) {
//   const m = word1.length,
//     n = word2.length
//   const dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(Infinity))
//   dp[0][0] = 0
//   for (let i = 1; i <= m; i++) dp[i][0] = dp[i - 1][0] + 1
//   for (let i = 1; i <= n; i++) dp[0][i] = dp[0][i - 1] + 1
//   for (let j = 1; j <= n; j++) {
//     for (let i = 1; i <= m; i++) {
//       dp[i][j] = word1[i - 1] === word2[j - 1] ? dp[i - 1][j - 1] : (Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + 1)
//     }
//   }
//   return dp[m][n]
// }

// 自顶向下
var minDistance = function (word1, word2) {
  const m = word1.length,
    n = word2.length
  const memo = new Array(m + 1).fill(null).map(() => new Array(n + 1))
  return helper(m, n)

  function helper(i, j) {
    if (memo[i][j]) return memo[i][j]
    let ans
    if (i === 0) ans = j
    else if (j === 0) ans = i
    else
      ans =
        word1[i - 1] === word2[j - 1]
          ? helper(i - 1, j - 1)
          : Math.min(helper(i - 1, j), helper(i - 1, j - 1), helper(i, j - 1)) + 1
    memo[i][j] = ans
    return memo[i][j]
  }
}

// @lc code=end

minDistance('intention', 'execution')
