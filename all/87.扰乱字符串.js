/*
 * @lc app=leetcode.cn id=87 lang=javascript
 *
 * [87] 扰乱字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// 递归解法, 判断左右子字符串是否为扰乱字符串
var isScramble = function (s1, s2) {
  if (s1.length !== s2.length) return false
  if (s1 === s2) return true

  const n = s1.length
  const letters = new Array(26).fill(0)

  for (let i = 0; i < n; i++) {
    letters[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++
    letters[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--
  }

  for (let i = 0; i < 26; i++) if (letters[i] !== 0) return false

  for (let i = 1; i < n; i++) {
    if (isScramble(s1.substring(0, i), s2.substring(0, i)) && isScramble(s1.substring(i), s2.substring(i))) return true
    if (isScramble(s1.substring(0, i), s2.substring(n - i)) && isScramble(s1.substring(i), s2.substring(0, n - i)))
      return true
  }
  return false
}
// @lc code=end
