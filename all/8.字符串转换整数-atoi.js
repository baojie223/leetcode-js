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
  const automat = new Automat()
  for (let c of str) {
    automat.get(c)
  }
  return automat.result
}

class Automat {
  static MIN = -(2 ** 31)
  static MAX = 2 ** 31 - 1

  constructor() {
    this._state = 'start'
    this._sign = 1
    this._ans = 0
  }

  get result() {
    return this._sign * this._ans
  }

  get(c) {
    switch (this._state) {
      case 'start': {
        if (Automat.isBlank(c)) {
          this._state = 'start'
        } else if (Automat.isSign(c)) {
          this._state = 'signed'
          this._sign = c === '+' ? 1 : -1
        } else if (Automat.isDigit(c)) {
          this._state = 'in_number'
          this.calculate(c)
        } else {
          this._state = 'end'
        }
        break
      }
      case 'signed': {
        if (Automat.isDigit(c)) {
          this._state = 'in_number'
          this.calculate(c)
        } else {
          this._state = 'end'
        }
        break
      }
      case 'in_number': {
        if (Automat.isDigit(c)) {
          this._state = 'in_number'
          this.calculate(c)
        } else {
          this._state = 'end'
        }
        break
      }
      case 'end': {
        return this._ans
      }
    }
  }

  calculate(c) {
    const curr = this._ans * 10 + Number(c)
    if (this._sign > 0) {
      this._ans = Math.min(curr, Automat.MAX)
    } else {
      this._ans = Math.min(curr, -Automat.MIN)
    }
  }

  static isBlank(c) {
    return c === ' ' || c === '\t' || c === '\n'
  }

  static isSign(c) {
    return c === '+' || c === '-'
  }

  static isDigit(c) {
    return c >= '0' && c <= '9'
  }
}

// function automat(str) {
//   let state = 'start'
//   let token = ''
//   for (let c of str) {
//     switch (state) {
//       case 'start': {
//         if (isBlank(c)) {
//           state = 'start'
//         } else if (isSign(c)) {
//           state = 'signed'
//           token += c
//         } else if (isDigit(c)) {
//           state = 'in_number'
//           token += c
//         } else {
//           state = 'end'
//         }
//         break
//       }
//       case 'signed': {
//         if (isDigit(c)) {
//           state = 'in_number'
//           token += c
//         } else {
//           state = 'end'
//         }
//         break
//       }
//       case 'in_number': {
//         if (isDigit(c)) {
//           state = 'in_number'
//           token += c
//         } else {
//           state = 'end'
//         }
//         break
//       }
//       case 'end': {
//         return token
//       }
//     }
//   }
//   return token
// }

// function isBlank(c) {
//   return c === ' ' || c === '\t' || c === '\n'
// }

// function isSign(c) {
//   return c === '+' || c === '-'
// }

// function isDigit(c) {
//   return c >= '0' && c <= '9'
// }
// @lc code=end

myAtoi('42')
