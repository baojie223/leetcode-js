/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  /**
   * dp[i] = dp[j] + check(j, i - 1)
   */
  const dp = new Array(s.length + 1).fill(false)
  dp[0] = true

  const wordDictSet = new Set(wordDict)

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDictSet.has(s.substr(j, i - j))) {
        dp[i] = true
        break
      }
    }
  }

  return dp[s.length]
}
// @lc code=end

wordBreak('leetcode', ['leet', 'code'])
