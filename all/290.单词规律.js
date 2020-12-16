/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  s = s.split(' ').map((char) => '_' + char)
  const m = pattern.length,
    n = s.length
  if (m !== n) return false

  const map = {}
  for (let i = 0; i < m; i++) {
    const x = pattern[i],
      y = s[i]
    if (!map[x]) map[x] = y
    if (!map[y]) map[y] = x

    if (map[x] !== y || map[y] !== x) return false
  }
  return true
}
// @lc code=end

wordPattern('abc', 'b c a')
