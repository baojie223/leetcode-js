/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  const n = s.length
  let count = 0
  for (let i = 0; i < n; i++) {
    count += check(s, i, i) + check(s, i, i + 1)
  }
  return count
}

function check(s, l, r) {
  const n = s.length
  let count = 0
  while (l >= 0 && r < n && s[l] === s[r]) {
    count++
    l--
    r++
  }
  return count
}
// @lc code=end
