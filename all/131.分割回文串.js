/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = []
  const dp = new Array(s.length).fill(null).map(() => new Array(s.length).fill(true))
  for (let j = 0; j < s.length; j++) {
    for (let i = 0; i <= j; i++) {
      if (i === j) {
        dp[i][j] = true
        continue
      }
      dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j]
    }
  }

  backtrack(s, 0, s.length - 1, [], result)

  return result

  function backtrack(s, l, r, path, result) {
    if (l > r) {
      result.push([...path])
      return
    }

    for (let i = l; i <= r; i++) {
      const str = s.substring(l, i + 1)
      if (dp[l][i]) {
        path.push(str)
        backtrack(s, i + 1, r, path, result)
        path.pop()
      }
    }
  }
}
// @lc code=end

partition('cbbbcc')
