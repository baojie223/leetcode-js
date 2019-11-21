/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  function isOdd(number) {
    if (number % 2 === 0) {
      return false
    } else {
      return true
    }
  }
  if (s.length < 2) return s
  if (s.length === 2) {
    if (s[0] === s[1]) {
      return s
    } else {
      return s[0]
    }
  }
  let dp = []
  dp[0] = s[0]
  dp[1] = s[0] === s[1] ? s[0] + s[1] : s[1]
  for (let i = 2; i < s.length; i++) {
    const odd = isOdd(dp[i - 1].length)
    if (odd) {
      const prev = s.indexOf(dp[i - 1]) - 1
      if (s[prev] === s[i]) {
        dp[i] = s[i] + dp[i - 1] + s[i]
      } else {
        dp[i] = s[i]
      }
    } else {
      dp[i] = s[i] === s[i - 1] ? s[i] + s[i - 1] : s[i]
    }
  }
  let max = dp[0]
  for (let j = 0; j < dp.length; j++) {
    if (dp[j].length > max.length) {
      max = dp[j]
    }
  }
  return max
}
// @lc code=end
