/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const m = s.length,
    n = p.length
  const dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(false))
  dp[0][0] = true
  for (let i = 1; i <= m; i++) {
    dp[i][0] = false
  }
  for (let j = 1; j <= n; j++) {
    if (isAlpha(p[j - 1]) || p[j - 1] === '.') {
      dp[0][j] = false
    } else if (!dp[0][j - 1] && dp[0][j - 2]) {
      dp[0][j] = true
    } else {
      dp[0][j] = false
    }
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (isAlpha(p[j - 1])) {
        dp[i][j] = s[i - 1] === p[j - 1] && dp[i - 1][j - 1]
      } else if (p[j - 1] === '.') {
        dp[i][j] = dp[i - 1][j - 1]
      } else if (p[j - 1] === '*') {
        if (dp[i][j - 2]) {
          dp[i][j] = true
        } else if (dp[i - 1][j] && (s[i - 1] === p[j - 2] || p[j - 2] === '.')) {
          dp[i][j] = true
        } else {
          dp[i][j] = false
        }
      }
    }
  }
  return dp[m][n]
}

function isAlpha(c) {
  return c <= 'z' && c >= 'a'
}
// @lc code=end

isMatch('aab', 'c*a*b') // false 6: s  4: *
