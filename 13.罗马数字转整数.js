/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let string = s
  string = string.replace(/III/gi, 'E')
  string = string.replace(/II/gi, 'F')
  const menu = {
    I: 1,
    F: 2,
    E: 3,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let sum = 0
  const arr = string.split('').map(str => {
    return menu[str]
  })
  const first = arr.shift()

  const last = arr.reduce((prev, next) => {
    if (next > prev) {
      sum = sum - prev
    } else {
      sum = sum + prev
    }
    return next
  }, first)
  sum = sum + last
  return sum
};

