/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  const n = s.length
  for (let i = 1; i <= n / 2; i++) {
    if (n % i !== 0) continue
    const a = s.substr(0, i)
    let p = i
    while (p < n) {
      const b = s.substr(p, i)
      if (a !== b) break
      p += i
    }
    if (p === n) return true
  }
  return false
}
// @lc code=end

repeatedSubstringPattern('aba')