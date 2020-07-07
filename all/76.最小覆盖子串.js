/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const window = {},
    need = {}
  for (let c of t) {
    if (!need[c]) need[c] = 0
    need[c]++
  }
  let left = 0,
    right = 0,
    valid = 0,
    start = 0,
    len = Number.MAX_SAFE_INTEGER
  while (right < s.length) {
    const c = s[right++]
    if (need[c]) {
      if (!window[c]) window[c] = 0
      window[c]++
      if (window[c] <= need[c]) valid++
    }
    while (valid === t.length) {
      if (right - left < len) {
        start = left
        len = right - left
      }
      const d = s[left++]
      if (window[d] <= need[d]) valid--
      window[d]--
    }
  }
  return len === Number.MAX_SAFE_INTEGER ? '' : s.substr(start, len)
}
// @lc code=end

minWindow('aa', 'aa')
