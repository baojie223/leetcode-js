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
var addStrings = function(num1, num2) {
  while (num1.length > num2.length) {
    num2 = '0' + num2
  }
  while (num1.length < num2.length) {
    num1 = '0' + num1
  }
  const len = num1.length
  let temp
  let sum = ''
  let quotient = 0
  let remainder = 0
  let n1
  let n2
  for (let i = len - 1; i >= 0; i--) {
    n1 = typeof num1[i] === 'undefined' ? 0 : Number(num1[i])
    n2 = typeof num2[i] === 'undefined' ? 0 : Number(num2[i])
    temp = n1 + n2 + quotient
    quotient = Math.floor(temp / 10)
    remainder = temp % 10
    sum = remainder + sum 
  }
  return quotient === 0 ? sum : quotient + sum
}
// @lc code=end

// console.log(addStrings('9', '99'))