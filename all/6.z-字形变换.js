/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  // 时间: O(n), 空间O(n)
  if (numRows === 1) return s
  const res = new Array(numRows).fill('')
  let row = 0,
    col = 0
  // flag为true代表是直着走, false代表斜着走
  let flag = true
  for (let c of s) {
    if (flag) {
      if (row < numRows - 1) {
        res[row++] += c
      } else {
        res[row--] += c
        col++
        flag = false
      }
    } else {
      if (row > 0) {
        res[row--] += c
        col++
      } else {
        res[row++] += c
        flag = true
      }
    }
  }
  let ans = ''
  for (let str of res) {
    ans += str
  }
  return ans
}
// @lc code=end

convert('PAYPALISHIRING', 3) // PAHNAPLSIIGYIR
