/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const window = {}
  let left = 0,
    right = 0,
    res = 0
  while (right < s.length) {
    const c = s[right++]
    if (!window[c]) window[c] = 0
    window[c]++
    while (window[c] > 1) {
      const d = s[left++]
      window[d]--
    }
    res = Math.max(res, right - left)
  }
  return res
}
// @lc code=end

// lengthOfLongestSubstring('abcabcbb')
