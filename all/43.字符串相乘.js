/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// 暴力破解
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'
  const m = num1.length,
    n = num2.length
  let ans = ''
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      ans = plus(ans, String(Number(num1[i]) * Number(num2[j])) + '0'.repeat(m - 1 - i + n - 1 - j))
    }
  }
  return ans
}

function plus(a, b) {
  if (!a) return b
  if (!b) return a
  const m = a.length,
    n = b.length
  let ans = '',
    carry = 0
  let i = m - 1,
    j = n - 1
  while (i >= 0 || j >= 0) {
    const x = i >= 0 ? Number(a[i]) : 0
    const y = j >= 0 ? Number(b[j]) : 0
    const curr = x + y + carry
    if (curr >= 10) {
      ans = String(curr % 10) + ans
      carry = 1
    } else {
      ans = curr + ans
      carry = 0
    }
    i--
    j--
  }
  return carry ? carry + ans : ans
}
// @lc code=end

multiply('123', '456') // 56088
