/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const map = {}
  for (let i = 0; i < s.length; i++) {
    if (typeof map[s[i]] === 'undefined') {
      map[s[i]] = 0
    }
    map[s[i]]++
  }
  for (let j = 0; j < s.length; j++) {
    if (map[s[j]] === 1) {
      return j
    }
  }
  return -1
}
// @lc code=end
