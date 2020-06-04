/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const window = {},
    need = {}
  for (let c of s1) {
    if (!need[c]) need[c] = 0
    need[c]++
  }
  let left = 0,
    right = 0,
    valid = 0
  while (right < s2.length) {
    const c = s2[right++]
    if (!window[c]) window[c] = 0
    window[c]++
    if (window[c] <= need[c]) valid++
    while (right - left >= s1.length) {
      const d = s2[left++]
      if (valid === s1.length) return true
      if (window[d] <= need[d]) valid--
      window[d]--
    }
  }
  return false
}
// @lc code=end
