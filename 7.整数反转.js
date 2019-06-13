/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let flag = true
  let res = x.toString()
    .split('')
    .filter(n => {
      if (n === '-') {
        flag = false
      }
      return n !== '-'
    })
    .reverse()
  if (!flag) {
    res.unshift('-')
  }
  res = parseInt(res.join(''))
  return res < Math.pow(2, 31) - 1 && res > (- Math.pow(2, 31)) ? res : 0
}
