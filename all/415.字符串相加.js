/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let i = num1.length - 1,
    j = num2.length - 1
  let curr = 0,
    carry = 0,
    rem = 0
  let n1, n2
  let ans = ''
  while (i >= 0 || j >= 0) {
    n1 = i >= 0 ? Number(num1[i]) : 0
    n2 = j >= 0 ? Number(num2[j]) : 0
    curr = n1 + n2 + carry
    if (curr >= 10) {
      rem = curr % 10
      carry = 1
    } else {
      rem = curr
      carry = 0
    }
    ans = String(rem) + ans
    i--
    j--
  }
  return carry ? '1' + ans : ans
}
// @lc code=end
