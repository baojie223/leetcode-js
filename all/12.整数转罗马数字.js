/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */

var intToRoman = function (num) {
  let state = 'M',
    token = ''
  automat(num)
  return token
  function automat(num) {
    let int = 0,
      rem = 0
    switch (state) {
      case 'M': {
        int = Math.floor(num / 1000)
        rem = num % 1000
        for (let i = 0; i < int; i++) token += 'M'
        state = 'D'
        automat(rem)
        break
      }
      case 'D': {
        if (num / 900 >= 1) {
          token.slice(token.length - 1)
          token += 'CM'
          state = 'C'
          automat(num % 900)
        } else {
          int = Math.floor(num / 500)
          rem = num % 500
          for (let i = 0; i < int; i++) token += 'D'
          state = 'C'
          automat(rem)
        }
        break
      }
      case 'C': {
        if (num / 400 >= 1) {
          token.slice(token.length - 1)
          token += 'CD'
          state = 'L'
          automat(num % 400)
        } else {
          int = Math.floor(num / 100)
          rem = num % 100
          for (let i = 0; i < int; i++) token += 'C'
          state = 'L'
          automat(rem)
        }
        break
      }
      case 'L': {
        if (num / 90 >= 1) {
          token.slice(token.length - 1)
          token += 'XC'
          state = 'X'
          automat(num % 90)
        } else {
          int = Math.floor(num / 50)
          rem = num % 50
          for (let i = 0; i < int; i++) token += 'L'
          state = 'X'
          automat(rem)
        }
        break
      }
      case 'X': {
        if (num / 40 >= 1) {
          token.slice(token.length - 1)
          token += 'XL'
          state = 'V'
          automat(num % 40)
        } else {
          int = Math.floor(num / 10)
          rem = num % 10
          for (let i = 0; i < int; i++) token += 'X'
          state = 'V'
          automat(rem)
        }
        break
      }
      case 'V': {
        if (num / 9 >= 1) {
          token.slice(token.length - 1)
          token += 'IX'
          state = 'I'
          automat(num % 9)
        } else {
          int = Math.floor(num / 5)
          rem = num % 5
          for (let i = 0; i < int; i++) token += 'V'
          state = 'I'
          automat(rem)
        }
        break
      }
      case 'I': {
        if (num / 4 >= 1) {
          token.slice(token.length - 1)
          token += 'IV'
          state = 'END'
        } else {
          int = num
          rem = num
          for (let i = 0; i < int; i++) token += 'I'
          state = 'END'
        }
        break
      }
      case 'END': {
        break
      }
    }
  }
}

// @lc code=end

intToRoman(4)
