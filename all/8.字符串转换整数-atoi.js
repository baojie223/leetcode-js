/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  const MIN = -(2 ** 31),
    MAX = 2 ** 31 - 1
  let i = 0, j = 0
  while (i < str.length && j < str.length) {
    if (str[i] === '+' || str[i] === '-') {
      j = i + 1
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '+' || str[i] === '-') {

    }
    if (str.charCodeAt(i))
  }
}
// @lc code=end
