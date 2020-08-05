/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const MIN = -(2 ** 31),
  MAX = 2 ** 31 - 1
var divide = function (dividend, divisor) {
  if (dividend === 0) return 0
  if (divisor === 1) {
    return dividend
  }
  if (divisor === -1) {
    if (dividend > MIN) return -dividend
    return MAX
  }
  let a = dividend,
    b = divisor
  let sign = (a > 0 && b < 0) || (a < 0 && b > 0) ? -1 : 1
  a = a > 0 ? a : -a
  b = b > 0 ? b : -b

  const ans = div(a, b)
  if (sign > 0) {
    return ans > MAX ? MAX : ans
  } else {
    return -ans
  }
  function div(a, b) {
    if (a < b) return 0
    let tmp = b
    let c = 1
    while (tmp + tmp <= a) {
      tmp += tmp
      c += c
    }
    return c + div(a - tmp, b)
  }
}
// @lc code=end

divide(10, 3)
