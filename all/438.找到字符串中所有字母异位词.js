/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const window = {}
  const need = {}
  for (let c of p) {
    if (!need[c]) need[c] = 0
    need[c]++
  }
  let left = 0
  let right = 0
  let valid = 0

  const res = []

  while (right < s.length) {
    const c = s[right]
    right++
    if (need[c]) {
      if (!window[c]) window[c] = 0
      window[c]++
      if (window[c] <= need[c]) valid++
    }
    while (right - left >= p.length) {
      if (valid === p.length) res.push(left)

      const d = s[left]
      left++
      if (need[d]) {
        if (window[d] <= need[d]) valid--
        window[d]--
      }
    }
  }

  return res
}
// @lc code=end
