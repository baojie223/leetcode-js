/*
 * @lc app=leetcode.cn id=1446 lang=javascript
 *
 * [1446] 连续字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let currentChar = ''
  let currentLength = 0
  let maxLength = 0
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (char !== currentChar) {
      currentChar = char
      currentLength = 0
    }
    currentLength++
    maxLength = Math.max(maxLength, currentLength)
  }
  return maxLength
}
// @lc code=end
