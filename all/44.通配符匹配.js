/*
 * @lc app=leetcode.cn id=44 lang=javascript
 *
 * [44] 通配符匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const m = s.length,
    n = p.length;
  const dp = Array(m + 1)
    .fill('')
    .map(() => Array(n + 1).fill(false));
  dp[0][0] = true;
  for (let i = 1; i <= n; i++) {
    if (p[i - 1] === '*') {
      dp[0][i] = true;
    } else {
      break;
    }
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '?' || p[j - 1] === s[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === '*') {
        dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
      }
    }
  }
  return dp[m][n];
};
// @lc code=end

isMatch('aab', 'c*a*b');
